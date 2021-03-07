import { Router } from "express";

import { getTweetInfo } from "../controllers/twitter.controller.js";

const twitterRouter = Router();

//get tweet data
twitterRouter.get("/", getTweetInfo);

export default twitterRouter;
