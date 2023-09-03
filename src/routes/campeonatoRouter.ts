import { Router } from "express"
import { CampeonatoController } from "../controllers/campeonatoController";

const campeonatoRouter = Router();
const campeonatoController = new CampeonatoController();

campeonatoRouter.post("/campeonato", campeonatoController.create);
campeonatoRouter.get("/campeonato/:id", campeonatoController.find);
campeonatoRouter.get("/campeonato", campeonatoController.findAll);
campeonatoRouter.put("/campeonato/:id", campeonatoController.update);
campeonatoRouter.delete("/campeonato/:id", campeonatoController.delete);

export {campeonatoRouter };