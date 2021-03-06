import { Router } from "express";

import fireballPredictionRouter from "./fireballPrediction.js";
import planetRouter from "./planet.js";

const router = Router();

router.use("/planets", planetRouter);
router.use("/predictions", fireballPredictionRouter);

export default router;
