import { Router } from "express"
import { CampeonatoController } from "../controllers/campeonatoController";

const campeonatoRouter = Router();
const campeonatoController = new CampeonatoController();

/*
Definindo funções cujo objetivo é estabelecer rotas de acesso aos métodos
da classe campeonatoContoller. Aqui sao definidas as rotas que o cliente fará uso
para acessar ou modificar os dados desejados.
*/

campeonatoRouter.post("/campeonato", campeonatoController.create);
campeonatoRouter.get("/campeonato/:id", campeonatoController.find);
campeonatoRouter.get("/campeonato", campeonatoController.findAll);
campeonatoRouter.put("/campeonato/:id", campeonatoController.update);
campeonatoRouter.delete("/campeonato/:id", campeonatoController.delete);

export {campeonatoRouter };