import { Router } from "express";

import { getNEOs } from "../controllers/NEO.controller.js";

const NEORouter = Router();

//get NEO data
NEORouter.get("/", getNEOs);

export default NEORouter;
