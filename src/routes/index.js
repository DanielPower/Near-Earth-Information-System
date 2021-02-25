import { Router } from "express";

import planetsRouter from "./planets.js";

const router = Router();

router.use("/planets", planetsRouter);

export default router;
