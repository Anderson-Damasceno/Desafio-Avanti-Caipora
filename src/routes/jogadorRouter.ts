import { Router } from "express"
import { JogadorController } from "../controllers/jogadorController";

const jogadorRouter = Router();
const jogadorController = new JogadorController();

jogadorRouter.post("/jogador", jogadorController.create);
jogadorRouter.get("/jogador/:id", jogadorController.find);
jogadorRouter.get("/jogador", jogadorController.findAll);
jogadorRouter.put("/jogador/:id", jogadorController.update);
jogadorRouter.delete("/jogador/:id", jogadorController.delete);

export { jogadorRouter };