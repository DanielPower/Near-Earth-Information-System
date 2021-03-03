import axios from "axios";

import FireballPredict from "../models/fireball_predict.model.js";

export const parse_fireball_predictions = async (req, res) => {
  const {
    data: { data: fireballs },
  } = await axios.get(
    "https://ssd-api.jpl.nasa.gov/sentry.api?all=1&ip-min=1e-5",
  ); //forces a minimum probability 0.00001

  fireballs.forEach(({ des, energy, ip, date, dist }) => {
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
    });
  });
};
