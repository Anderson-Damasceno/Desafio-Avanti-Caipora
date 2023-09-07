import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { JogadorModel } from "../models/jogadorModel";

const jogadorModel = new JogadorModel();

class JogadorController{

    async create(req: Request, res: Response) {
        try {

            const {id, nome, nascimento, timeId } = req.body;

            const jogador = await jogadorModel.create(id, nome, nascimento, timeId);

            return res.status(StatusCodes.OK).json(jogador);
            
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: 'An error occurred'});
        }
    }

    async find(req: Request, res: Response) {
        try {

            const {id} = req.params;

            const jogador = await jogadorModel.findById(parseInt(id));

            return res.status(StatusCodes.OK).json(jogador);

        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: 'An error occurred'});
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            
            const jogadores = await jogadorModel.findAll();

            return res.status(StatusCodes.OK).json(jogadores);

        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: 'An error occurred'});
        }
    }

    async update(req: Request, res: Response) {
        try {

            const { id } = req.params;
            const { nome, nascimento, timeId } = req.body;

            const jogador = await jogadorModel.update(parseInt(id), nome, nascimento, timeId);

            return res.status(StatusCodes.OK).json(jogador);
            
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: 'An error occurred'});
        }
    }

    async delete(req: Request, res: Response) {
        try {
        
            const { id } = req.params;
            await jogadorModel.delete(parseInt(id));

            return res.status(StatusCodes.OK).json({msg: 'Jogador excluído com sucesso!'});

        } catch (error) {

            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: 'An error occurred'});            
        }
    }
}



export { JogadorController };

