import { prismaClient } from "../database/prismaClient";

class CampeonatoModel {

    public async create(id: number, nome: string, inicio: Date, fim:Date) {

        const campeonato = await prismaClient.campeonato.create({
            data: {
                id,
                nome,
                inicio,
                fim
            }
        });
    
        return campeonato;    
    }
    
    public async findById(id: number) {
    
        const campeonato = await prismaClient.campeonato.findUnique({
            where: { id }
        });
    
        return campeonato;
        
    }
    
    public async findAll() {

        const campeonato = await prismaClient.campeonato.findMany();

        return campeonato;
        
    }

    public async update(id: number, nome: string, inicio:Date, fim:Date) {

        const campeonato = await prismaClient.campeonato.update({
            where: { id },
            data: {
                id,
                nome,
                inicio,
                fim
            }
        });
    
        return campeonato;    
    }

    public async delete(id: number) {

        const campeonato = await prismaClient.campeonato.delete({
            where: { id }
        });  
    }

}

export { CampeonatoModel };
