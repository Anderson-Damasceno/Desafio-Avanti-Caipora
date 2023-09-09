import { prismaClient } from "../database/prismaClient";

/*Temos uma classe com métodos cuja funcionalidade é lidar com Banco de Dados*/
class CampeonatoModel {

    //Método para criar no banco de dados uma entidade do tipo campeonato
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

    //Método para encontrar uma Entidade apartir do Id
    public async findById(id: number) {
    
        const campeonato = await prismaClient.campeonato.findUnique({
            where: { id }
        });
    
        return campeonato;
        
    }

    //Método para encontrar todas as Entidades que estão no banco de dados
    public async findAll() {

        const campeonato = await prismaClient.campeonato.findMany();

        return campeonato;
        
    }

    //Método para alterar propriedades em alguma Entidade apartir do Id no banco de dados
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
    
    //Método para deletar entidade no banco de dados apartir do Id
    public async delete(id: number) {

        const campeonato = await prismaClient.campeonato.delete({
            where: { id }
        });  
    }

}

export { CampeonatoModel };

// Obs.: Os dados do tipo Date devem ser preenchidos no formato ISO 8601 - YYYY-MM-DDTHH:MM:SS.000Z