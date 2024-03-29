import axios from "axios";

import FireballPrediction from "../models/fireballPrediction.model.js";

const scrapeFireballPredictions = async () => {
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
    let decimalProb = (
      Math.pow(ip.split("e")[0], ip.split("e")[1]) * 100
    ).toFixed(3);
    fireballPromises.push(
      FireballPrediction.create({
        des,
        energy,
        ip: decimalProb,
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
};

export default scrapeFireballPredictions;
