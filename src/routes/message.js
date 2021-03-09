import { Router } from "express";

import { postMessage, getMessages } from "../controllers/message.controller.js";

const messageRouter = Router();

messageRouter.get("/", getMessages);
messageRouter.post("/", postMessage);

export default messageRouter;
