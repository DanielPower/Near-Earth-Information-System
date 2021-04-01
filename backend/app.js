import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import schedule from "node-schedule";
import cors from "cors";
import routes from "./src/routes/index.js";
import scrapeAll from "./src/scripts/scrapeAll.js";

dotenv.config();

await mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`);

// Scrape NASA APIs once upon launching the app, and then every hour afterward
if (process.env.SCRAPE == "true") {
  scrapeAll();
  schedule.scheduleJob("0 * * * *", () => {
    scrapeAll();
  });
}

const app = express();
app.use(express.json());
app.use(
  cors({
    allowedOrigins: ["*"],
  }),
);
app.use("/", routes);
app.listen(3000);
