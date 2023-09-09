import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { CampeonatoModel } from "../models/campeonatoModel";

const campeonatoModel = new CampeonatoModel();

/*Classe para lidar com as Requisições e Respostas vindas do cliente
e Validação de dados*/
class CampeonatoController{

/*A partir dos dados recebidos do cliente via corpo da requisição é criado 
uma entidade campeonato e retorna ao cliente o código de status e a Entidade
no formato json. Caso haja erro envia-se o codigo de status apropriado
e envia-se mensagem de erro amigável*/
    async create(req: Request, res: Response) {
        try {

            const {id, nome, inicio, fim } = req.body;

            const campeonato = await campeonatoModel.create(id, nome, inicio, fim);

            return res.status(StatusCodes.OK).json(campeonato);
            
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: 'An error occurred'});
        }
    }

/*A partir dos dados recebidos do cliente via corpo da requisição busca-se
uma entidade campeonato apartir do Id e retorna ao cliente o código de status
e a Entidade no formato json. Caso haja erro envia-se o codigo de status
apropriado e envia-se mensagem de erro amigável*/
    async find(req: Request, res: Response) {
        try {

            const {id} = req.params;

            const campeonato = await campeonatoModel.findById(parseInt(id));

            return res.status(StatusCodes.OK).json(campeonato);

        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: 'An error occurred'});
        }
    }

/*A partir dos dados recebidos do cliente via corpo da requisição busca-se
todas as entidades campeonato e retorna ao cliente o código de status
e a Entidade no formato json. Caso haja erro envia-se o codigo de status
apropriado e envia-se mensagem de erro amigavel*/
    async findAll(req: Request, res: Response) {
        try {
            
            const campeonatos = await campeonatoModel.findAll();

            return res.status(StatusCodes.OK).json(campeonatos);

        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: 'An error occurred'});
        }
    }

/*A partir dos dados recebidos do cliente via corpo da requisição altera-se
a entidade campeonato apartir do Id e retorna ao cliente o código de status
e a Entidade no formato json. Caso haja erro envia-se o codigo de status
apropriado e envia-se mensagem de erro amigável*/
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
    
/*A partir dos dados recebidos do cliente via corpo da requisição apaga-se
a entidade jogador apartir do Id e retorna ao cliente o código de status
e a Entidade no formato json. Caso haja erro envia-se o codigo de status
apropriado e envia-se mensagem de erro amigável*/
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

