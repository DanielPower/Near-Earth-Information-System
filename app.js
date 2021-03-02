import express from "express";
import mongoose from "mongoose";
import routes from "./src/routes/index.js";

//remove below later
import { parse_fireball_predictions } from './src/utilities/fireball_predict.utilities.js'


//remove above later
await mongoose.connect("mongodb://localhost:27017/nasa");

//remove below later
parse_fireball_predictions();
//remove above later
const app = express();
app.use(express.json());
app.use("/", routes);
app.listen(3000);
