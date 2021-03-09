import { Router } from "express";

import { getNHATSs } from "../controllers/NHATS.controller.js";


const NHATSRouter = Router();

NHATSRouter.get("/", getNHATSs);



export default NHATSRouter;
