import { Router } from "express"
import { TimeController } from "../controllers/timeController";

const timeRouter = Router();
const timeController = new TimeController();

/*
Definindo funções cujo objetivo é estabelecer rotas de acesso aos métodos
da classe timerContoller. Aqui sao definidas as rotas que o cliente fará uso
para acessar ou modificar os dados desejados.
*/

timeRouter.post("/time", timeController.create);
timeRouter.get("/time/:id", timeController.find);
timeRouter.get("/time", timeController.findAll);
timeRouter.put("/time/:id", timeController.update);
timeRouter.delete("/time/:id", timeController.delete);

export { timeRouter };