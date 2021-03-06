import { Router } from "express";

import { findByDate } from "../controllers/fireballPrediction.controller.js";

const fireballPredictionRouter = Router();

fireballPredictionRouter.get("/", findByDate);

export default fireballPredictionRouter;
