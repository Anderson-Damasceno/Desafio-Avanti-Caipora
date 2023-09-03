import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { TimeModel } from "../models/timeModel";

const timeModel = new TimeModel();

class TimeController{

    async create(req: Request, res: Response) {
        try {

            const {id, nome, fundacao } = req.body;

            const time = await timeModel.create(id, nome, fundacao);

            return res.status(StatusCodes.OK).json(time);
            
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: 'An error occurred'});
        }
    }

    async find(req: Request, res: Response) {
        try {

            const {id} = req.params;

            const time = await timeModel.findById(parseInt(id));

            return res.status(StatusCodes.OK).json(time);

        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: 'An error occurred'});
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            
            const times = await timeModel.findAll();

            return res.status(StatusCodes.OK).json(times);

        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: 'An error occurred'});
        }
    }

    async update(req: Request, res: Response) {
        try {

            const { id } = req.params;
            const { nome, fundacao } = req.body;

            const time = await timeModel.update(parseInt(id), nome, fundacao);

            return res.status(StatusCodes.OK).json(time);
            
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: 'An error occurred'});
        }
    }

    async delete(req: Request, res: Response) {
        try {
        
            const { id } = req.params;
            await timeModel.delete(parseInt(id));

            return res.status(StatusCodes.OK).json({msg: 'Time excluído com sucesso!'});

        } catch (error) {

            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: 'An error occurred'});            
        }
    }
}



export { TimeController };

