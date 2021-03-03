import { Router } from "express";

import fbPredRouter from "./fireball_predict.js";
import planetsRouter from "./planets.js";

const router = Router();

router.use("/planets", planetsRouter);
router.use("/predictions", fbPredRouter);

export default router;
