import { Router } from "express";

import fireballPredictionRouter from "./fireballPrediction.js";
import planetRouter from "./planet.js";
import NHATSRouter from "./NHAT.js";

const router = Router();

router.use("/planets", planetRouter);
router.use("/predictions", fireballPredictionRouter);
router.use("/nhats", NHATSRouter);

export default router;
