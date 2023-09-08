import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { CampeonatoModel } from "../models/campeonatoModel";

const campeonatoModel = new CampeonatoModel();

class CampeonatoController{

    async create(req: Request, res: Response) {
        try {

            const {id, nome, inicio, fim } = req.body;

            const campeonato = await campeonatoModel.create(id, nome, inicio, fim);

            return res.status(StatusCodes.OK).json(campeonato);
            
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: 'An error occurred'});
        }
    }

    async find(req: Request, res: Response) {
        try {

            const {id} = req.params;

            const campeonato = await campeonatoModel.findById(parseInt(id));

            return res.status(StatusCodes.OK).json(campeonato);

        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: 'An error occurred'});
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            
            const campeonatos = await campeonatoModel.findAll();

            return res.status(StatusCodes.OK).json(campeonatos);

        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: 'An error occurred'});
        }
    }

    async update(req: Request, res: Response) {
        try {

            const { id } = req.params;
            const { nome, inicio, fim } = req.body;

            const campeonato = await campeonatoModel.update(parseInt(id), nome, inicio, fim);

            return res.status(StatusCodes.OK).json(campeonato);
            
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: 'An error occurred'});
        }
    }

    async delete(req: Request, res: Response) {
        try {
        
            const { id } = req.params;
            await campeonatoModel.delete(parseInt(id));

            return res.status(StatusCodes.OK).json({msg: 'Campeonato excluído com sucesso!'});

        } catch (error) {

            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: 'An error occurred'});            
        }
    }
}



export { CampeonatoController };

