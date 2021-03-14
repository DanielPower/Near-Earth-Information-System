import { Router } from "express";

import { findByFilter } from "../controllers/fireballPrediction.controller.js";

const fireballPredictionRouter = Router();

fireballPredictionRouter.get("/", findByFilter);

export default fireballPredictionRouter;
