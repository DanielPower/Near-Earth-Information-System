import dayjs from "dayjs";

import FireballPrediction from "../models/fireballPrediction.model.js";

export const findByFilter = async (req, res) => {
  const minYear = parseInt(req.query.yearMin ?? 0, 10);
  const maxYear = parseInt(req.query.yearMax ?? 9999, 10);
  const minProb = parseInt(req.query.probMin ?? 0.001, 10); //minimum possible value in DB
  const maxProb = parseInt(req.query.probMax ?? 100.0, 10);
  let predictions = await FireballPrediction.findByFilter(
    minYear,
    maxYear,
    minProb, //given as percents
    maxProb,
  );
  res.send(
    predictions.map(({ ip, des, dist, date, energy }) => ({
      ip,
      dist,
      des,
      date: dayjs(date).format("YYYY-MM-DD"),
      energy,
    })),
  );
};
