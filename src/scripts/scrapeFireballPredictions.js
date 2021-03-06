import axios from "axios";
import mongoose from "mongoose";

import FireballPredict from "../models/fireballPrediction.model.js";

await mongoose.connect("mongodb://localhost:27017/nasa");

// Get fireball prediction data from NASA
const {
  data: { data: fireballs },
} = await axios.get("https://ssd-api.jpl.nasa.gov/sentry.api", {
  params: {
    all: 1,
    "ip-min": "1e-5",
  },
});

// Save fireball prediction data to mongodb
const fireballPromises = [];
fireballs.forEach(({ des, energy, ip, date, dist }) => {
  fireballPromises.push(
    FireballPredict.create({
      des,
      energy,
      ip,
      date: date.split(".")[0],
      year: parseInt(date.split("-")[0], 10),
      dist,
    }).catch((error) => {
      if (error.code !== 11000) {
        throw error;
      }
    }),
  );
});

// Close connection once all fireballs have been saved.
Promise.all(fireballPromises).then(() => {
  mongoose.disconnect();
});
