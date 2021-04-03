import mongoose from "mongoose";

const { Schema, model } = mongoose;

const fireballPredictionSchema = new Schema({
  des: { type: String, required: true },
  energy: { type: String, required: true },
  ip: { type: Number, required: true },
  date: { type: Date, required: true },
  year: { type: Number, required: true },
  dist: { type: String, required: true },
});

fireballPredictionSchema.index(
  { des: 1, energy: 1, ip: 1, date: 1, dist: 1 },
  { unique: true },
);

const FireballPrediction = model("FireballPredict", fireballPredictionSchema);

FireballPrediction.findByFilter = async (
  search_year_min,
  search_year_max,
  search_prob_min,
  search_prob_max,
) =>
  await FireballPrediction.find({
    year: { $gte: search_year_min, $lte: search_year_max },
    ip: { $gte: search_prob_min, $lte: search_prob_max },
  });

export default FireballPrediction;
