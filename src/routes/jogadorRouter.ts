import { Router } from "express";
import { CreateJogadorController } from "../controllers/jogadorController";
const router = Router()

router.post("/jogador", CreateJogadorController)

export {router}

 
/*const jogadorRouter = ''
export {jogadorRouter};
*/