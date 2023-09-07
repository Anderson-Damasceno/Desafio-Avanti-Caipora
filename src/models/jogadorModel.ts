import { prismaClient } from "../database/prismaClient";

class JogadorModel {

    public async create(id: number, nome: string, nascimento: Date, timeId: number) {

        const jogador = await prismaClient.jogador.create({
            data: {
                id,
                nome,
                nascimento,
                timeId
            }
        });
    
        return jogador;    
    }
    
    public async findById(id: number) {
    
        const jogador = await prismaClient.jogador.findUnique({
            where: { id }
        });
    
        return jogador;
        
    }
    
    public async findAll() {

        const jogadores = await prismaClient.jogador.findMany();

        return jogadores;
        
    }

    public async update(id: number, nome: string, nascimento: Date, timeId: number) {

        const jogador = await prismaClient.jogador.update({
            where: { id },
            data: {
                id,
                nome,
                nascimento,
                timeId
            }
        });
    
        return jogador;    
    }

    public async delete(id: number) {

        const jogador = await prismaClient.jogador.delete({
            where: { id }
        });  
    }

    

}

export { JogadorModel };
