import { Router } from "express";

import { FindByDate } from "../controllers/fireball_predict.controller.js";

const fbPredRouter = Router();

fbPredRouter.get("/", FindByDate);

export default fbPredRouter;
