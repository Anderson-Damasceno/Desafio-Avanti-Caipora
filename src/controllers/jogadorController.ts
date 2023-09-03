import { Request, Response, request } from "express";
import { createJogador } from "../models/jogadorModel"
import { StatusCodes } from "http-status-codes";

function CreateJogadorController(req:Request,res:Response){
    
    try {
        
    const { id, nome, nascimento, time, timeId } = req.body;

    const jogador =  createJogador(id, nome, nascimento, time, timeId)

    return res.status(StatusCodes.OK).json(jogador)

    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'An error occurred' });
    }  
}

export {CreateJogadorController}

