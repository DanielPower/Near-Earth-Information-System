import { Router } from "express";

import NHATSRouter from "./NHAT.js";
import fireballCollisionRouter from "./fireballCollisions.js";
import fireballPredictionRouter from "./fireballPrediction.js";
import planetRouter from "./planet.js";

const router = Router();

router.use("/planets", planetRouter);
router.use("/predictions", fireballPredictionRouter);
router.use("/collisions", fireballCollisionRouter);
router.use("/nhats", NHATSRouter);

export default router;
