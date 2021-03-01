import { Router } from "express";

import {
  getAllPlanets,
  createPlanet,
} from "../controllers/planet.controller.js";

const planetsRouter = Router();

planetsRouter.get("/", getAllPlanets);
planetsRouter.post("/", createPlanet);

export default planetsRouter;
//hello