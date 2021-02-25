import express from "express";
import mongoose from "mongoose";

import routes from "./src/routes/index.js";

await mongoose.connect("mongodb://localhost:27017/nasa");

const app = express();
app.use(express.json());
app.use("/", routes);
app.listen(3000);
