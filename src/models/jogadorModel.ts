import { primaClient } from "../database/prismaClient"; 

 function async createJogador(id, nome, nascimento, time, timeId){


    const jogador = await primaClient.jogador.create({
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






