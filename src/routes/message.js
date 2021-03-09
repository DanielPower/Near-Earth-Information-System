import { Router } from "express";

import { postMessage } from "../controllers/message.controller.js";
import { getMessage } from "../controllers/message.controller.js";

const MessageRouter = Router();

MessageRouter.post("/", postMessage);
MessageRouter.get("/", getMessage);



export default MessageRouter;
