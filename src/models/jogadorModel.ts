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
export{ createJogador }






