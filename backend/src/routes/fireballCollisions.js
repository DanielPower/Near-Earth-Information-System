import { Router } from "express";

import {
  findByDistance,
  getCountryImpactCounts,
} from "../controllers/fireballCollisions.controller.js";

const fireballCollisionsRouter = Router();

fireballCollisionsRouter.get("/", findByDistance);
fireballCollisionsRouter.get("/country", getCountryImpactCounts);

export default fireballCollisionsRouter;
