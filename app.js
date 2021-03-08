import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import routes from "./src/routes/index.js";

dotenv.config();

await mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`);

const app = express();
app.use(express.json());
app.use("/", routes);
app.listen(3000);
