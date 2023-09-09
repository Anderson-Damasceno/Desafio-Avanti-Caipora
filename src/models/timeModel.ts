import { prismaClient } from "../database/prismaClient";

class TimeModel {

/*
Temos uma classe com métodos cuja funcionalidade é lidar com Banco de Dados
*/

    public async create(id: number, nome: string, fundacao: Date) {

        //Método para criar no banco de dados uma entidade do tipo time

        const time = await prismaClient.time.create({
            data: {
                id,
                nome,
                fundacao
            }
        });
    
        return time;    
    }
    
        //Método para encontrar uma Entidade a partir do Id

    public async findById(id: number) {
    
        const time = await prismaClient.time.findUnique({
            where: { id }
        });
    
        return time;
        
    }

        //Método para encontrar todas as Entidades que estão no banco de dados

    
    public async findAll() {

        const times = await prismaClient.time.findMany();

        return times;
        
    }

    //Método para alterar propriedades em alguma Entidade a partir do Id no banco de dados

    public async update(id: number, nome: string, fundacao: Date) {

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

    //Método para excluir entidade no banco de dados a partir do Id

    public async delete(id: number) {

        const time = await prismaClient.time.delete({
            where: { id }
        });  
    }

    

}

export { TimeModel };

// Obs.: Os dados do tipo Date devem ser preenchidos no formato ISO 8601 - YYYY-MM-DDTHH:MM:SS.000Z