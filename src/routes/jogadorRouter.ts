import { Router } from "express"
import { JogadorController } from "../controllers/jogadorController";

const jogadorRouter = Router();
const jogadorController = new JogadorController();
/*
Definindo funções cujo objetivo é estabelecer rotas de acesso aos métodos
da classe jogadorContoller. Aqui sao definidas as rotas que o cliente fará uso
para acessar ou modificar os dados desejados.
*/

jogadorRouter.post("/jogador", jogadorController.create);
jogadorRouter.get("/jogador/:id", jogadorController.find);
jogadorRouter.get("/jogador", jogadorController.findAll);
jogadorRouter.put("/jogador/:id", jogadorController.update);
jogadorRouter.delete("/jogador/:id", jogadorController.delete);

export { jogadorRouter };