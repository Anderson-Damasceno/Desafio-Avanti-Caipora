import { Router } from "express"
import { TimeController } from "../controllers/timeController";

const timeRouter = Router();
const timeController = new TimeController();

timeRouter.post("/time", timeController.create);
timeRouter.get("/time/:id", timeController.find);
timeRouter.get("/time", timeController.findAll);
timeRouter.put("/time/:id", timeController.update);
timeRouter.delete("/time/:id", timeController.delete);

export { timeRouter };