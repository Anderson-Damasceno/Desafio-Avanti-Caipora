import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { TimeModel } from "../models/timeModel";

const timeModel = new TimeModel();

class TimeController{

    // Implementação do método 'create' que cria um novo registro da tabela no banco de dados. Primeiro se obtém as propriedades (id, name, etc), que são os dados que serão utilizados para criar o novo registro através do método prismaClient.create(). O prismaClient é um objeto da ferramenta PRISMA utilizada para conectar aplicações a bancos de dados. Se a ação funcionar corretamente, as informações serão enviadas para o banco de dados, indicando que a solicitação foi bem sucedida. Se ocorrer um erro, a função detecta o erro e retorna uma mensagem.

    async create(req: Request, res: Response) {
        try {

            const {id, nome, fundacao } = req.body;

            const time = await timeModel.create(id, nome, fundacao);

            return res.status(StatusCodes.OK).json(time);
            
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: 'An error occurred'});
        }
    }

    // Implementação do método 'find' que encontra o registro no banco de dados por seu ID. A função primeiro obtém o id do objeto que será pesquisado atraves do request.params. O método .findUnique() encontra um único registro na tabela do banco de dados que corresponda aos critérios especificados. Se a ação funcionar corretamente, as informações serão apresentadas, indicando que a solicitação foi bem sucedida. Se ocorrer um erro, a função detecta o erro e retorna uma mensagem.

    async find(req: Request, res: Response) {
        try {

            const {id} = req.params;

            const time = await timeModel.findById(parseInt(id));

            return res.status(StatusCodes.OK).json(time);

        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: 'An error occurred'});
        }
    }

    // Implementação do método 'findAll' que encontra todos os registros. O método jogador.findMany() retorna um array com todos os registros da tabela. Se a ação funcionar corretamente, as informações serão apresentadas, indicando que a solicitação foi bem sucedida. Se ocorrer um erro, a função detecta o erro e retorna uma mensagem.

    async findAll(req: Request, res: Response) {
        try {
            
            const times = await timeModel.findAll();

            return res.status(StatusCodes.OK).json(times);

        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: 'An error occurred'});
        }
    }

    // Implementação do método 'update' que atualiza um registro no banco de dados. Primeiro se obtém as propriedades (id, name, etc), que são os dados que serão utilizados para atualizar o novo registro através do método prismaClient.update(). O método .update() atualiza um registro na tabela em questão do banco de dados.Se a ação funcionar corretamente, as informações serão atualizadas, indicando que a solicitação foi bem sucedida. Se ocorrer um erro, a função detecta o erro e retorna uma mensagem.

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

    // Implementação do método 'delete' que exclui um registro no banco de dados. A função primeiro obtém a propriedade id do objeto que será excluido através do request.params. Esta propriedade é o ID do registro que será excluído. A seguir, a função chama o método prismaClient.delete() para deletar o registro. O método .delete() exclui um registro da tabela do banco de dados. Se a ação funcionar corretamente, retorna uma mensagem indicando que a solicitação foi bem sucedida. Se ocorrer um erro, a função detecta o erro e retorna uma mensagem.

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

