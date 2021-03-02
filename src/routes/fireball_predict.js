import { Router } from "express";

import { FindByDate } from "../controllers/planet.controller.js";

const fbPredRouter = Router();

fbPredRouter.get("/", FindByDate);

export default fbPredRouter;
