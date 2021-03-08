import { Router } from "express";

import { findByDistance } from "../controllers/fireballCollisions.controller.js";

const fireballCollisionsRouter = Router();

fireballCollisionsRouter.get("/", findByDistance);

export default fireballCollisionsRouter;
