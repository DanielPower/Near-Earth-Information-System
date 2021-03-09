import { Router } from "express";

import NHATSRouter from "./NHAT.js";
import fireballCollisionRouter from "./fireballCollisions.js";
import fireballPredictionRouter from "./fireballPrediction.js";
import messageRouter from "./message.js";

const router = Router();

router.use("/predictions", fireballPredictionRouter);
router.use("/collisions", fireballCollisionRouter);
router.use("/nhats", NHATSRouter);
router.use("/messages", messageRouter);

export default router;
