import { prismaClient } from "../database/prismaClient";
/*
Temos uma classe com métodos cuja funcionalidade é lidar com Banco de Dados
*/
class JogadorModel {
//Método para criar no banco de dados uma entidade do tipo jogador
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
    //Método para encontrar uma Entidade apartir do Id
    public async findById(id: number) {
    
        const jogador = await prismaClient.jogador.findUnique({
            where: { id }
        });
    
        return jogador;
        
    }
    //Método para encontrar todas as Entidades que estão no banco de dados
    public async findAll() {

        const jogadores = await prismaClient.jogador.findMany();

        return jogadores;
        
    }
//Método para alterar propriedades em alguma Entidade apartir do Id no banco de dados
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
//Método para deletar entidade no banco de dados apartir do Id
    public async delete(id: number) {

        const jogador = await prismaClient.jogador.delete({
            where: { id }
        });  
    }

    

}

export { JogadorModel };
