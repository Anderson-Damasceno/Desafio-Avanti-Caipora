import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { JogadorModel } from "../models/jogadorModel";

const jogadorModel = new JogadorModel();
//Classe para lidar com as Requisições e Respostas vindas do cliente
//e Validação de dados
class JogadorController{

/*A partir dos dados recebidos do cliente via corpo da requisição é criado 
uma entidade jogador e retorna ao cliente o código de status e a Entidade
no formato json. Caso haja erro envia-se o codigo de status apropriado
e envia-se mensagem de erro amigavel*/

    async create(req: Request, res: Response) {
        try {

            const {id, nome, nascimento, timeId } = req.body;

            const jogador = await jogadorModel.create(id, nome, nascimento, timeId);

            return res.status(StatusCodes.OK).json(jogador);
            
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: 'An error occurred'});
        }
    }
/*A partir dos dados recebidos do cliente via corpo da requisição busca-se
uma entidade jogador apartir do Id e retorna ao cliente o código de status
e a Entidade no formato json. Caso haja erro envia-se o codigo de status
apropriado e envia-se mensagem de erro amigavel*/

    async find(req: Request, res: Response) {
        try {

            const {id} = req.params;

            const jogador = await jogadorModel.findById(parseInt(id));

            return res.status(StatusCodes.OK).json(jogador);

        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: 'An error occurred'});
        }
    }
/*A partir dos dados recebidos do cliente via corpo da requisição busca-se
todas as entidades jogadores e retorna ao cliente o código de status
e a Entidade no formato json. Caso haja erro envia-se o codigo de status
apropriado e envia-se mensagem de erro amigavel*/

    async findAll(req: Request, res: Response) {
        try {
            
            const jogadores = await jogadorModel.findAll();

            return res.status(StatusCodes.OK).json(jogadores);

        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: 'An error occurred'});
        }
    }
/*A partir dos dados recebidos do cliente via corpo da requisição altera-se
a entidade jogador apartir do Id e retorna ao cliente o código de status
e a Entidade no formato json. Caso haja erro envia-se o codigo de status
apropriado e envia-se mensagem de erro amigavel*/
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
/*A partir dos dados recebidos do cliente via corpo da requisição apaga-se
a entidade jogador apartir do Id e retorna ao cliente o código de status
e a Entidade no formato json. Caso haja erro envia-se o codigo de status
apropriado e envia-se mensagem de erro amigavel*/

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

