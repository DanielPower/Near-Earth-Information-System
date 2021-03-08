import { Router } from "express";

import { getNHATSs } from "../controllers/NHATS.controller.js";

const fireballPredictionRouter = Router();

fireballPredictionRouter.get("/", getNHATSs);

export default fireballPredictionRouter;
