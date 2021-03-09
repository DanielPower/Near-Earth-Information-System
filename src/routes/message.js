import { Router } from "express";

import { postMessage } from "../controllers/message.controller.js";


const MessageRouter = Router();

NHATSRouter.post("/", postMessage);
NHATSRouter.get("/", getMessage);



export default MessageRouter;
