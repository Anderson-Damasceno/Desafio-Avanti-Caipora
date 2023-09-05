import { prismaClient } from "../database/prismaClient";

class TimeModel {

    public async create(id: number, nome: string, fundacao: string) {

        const time = await prismaClient.time.create({
            data: {
                id,
                nome,
                fundacao
            }
        });
    
        return time;    
    }
    
    public async findById(id: number) {
    
        const time = await prismaClient.time.findUnique({
            where: { id }
        });
    
        return time;
        
    }
    
    public async findAll() {

        const times = await prismaClient.time.findMany();

        return times;
        
    }

    public async update(id: number, nome: string, fundacao: string) {

        const time = await prismaClient.time.update({
            where: { id },
            data: {
                id,
                nome,
                fundacao
            }
        });
    
        return time;    
    }

    public async delete(id: number) {

        const time = await prismaClient.time.delete({
            where: { id }
        });  
    }

    

}

export { TimeModel };
