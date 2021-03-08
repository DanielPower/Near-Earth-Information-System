import dayjs from "dayjs";

import FireballPrediction from "../models/fireballPrediction.model.js";

export const findByDate = async (req, res) => {
  const year = parseInt(req.query.year, 10);
  let predictions = await FireballPrediction.findByDate(year);
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
