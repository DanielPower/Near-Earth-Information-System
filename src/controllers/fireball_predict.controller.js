import httpStatus from "http-status";

import FireballPredict from "../models/fireball_predict.model.js";

export const FindByDate = async (req, res) => {
  const prediction_date = req.params.date;
  let msg = await FireballPredict.FindPredictionByDate(prediction_date);
  res.send(msg);
};
