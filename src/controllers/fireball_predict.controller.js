import dayjs from "dayjs";
import httpStatus from "http-status";

import FireballPredict from "../models/fireball_predict.model.js";

export const FindByDate = async (req, res) => {
  const year = parseInt(req.query.year, 10);
  let predictions = await FireballPredict.findByDate(year);
  res.send(
    predictions.map(({ ip, dist, date, energy }) => ({
      ip,
      dist,
      date: dayjs(date).format("YYYY-MM-DD"),
      energy,
    })),
  );
};
