import { prismaClient } from "../database/prismaClient"; 

async function createJogador(id:number, nome:string, nascimento:any, time:any, timeId:any){

    const jogador = await prismaClient.jogador.create({
        data: {
           id,
           nome,
           nascimento,
           time,
           timeId  
        }
    })
    return jogador
    
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

    public async update(id:number, nome:string, nascimento:any, time:any, timeId:any) {

        const jogador = await prismaClient.jogador.update({
            where: { id },
            data: {
                id,
                nome,
                nascimento,
                time,
                timeId
            }
        });
    
        return jogador;    
    }

    public async delete(id: number) {

        const time = await prismaClient.jogador.delete({
            where: { id }
        });  
    }

    


export{ createJogador }
