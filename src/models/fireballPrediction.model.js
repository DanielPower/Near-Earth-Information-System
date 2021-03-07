import mongoose from "mongoose";

const { Schema, model } = mongoose;

const fireballPredictionSchema = new Schema({
  des: { type: String, required: true },
  energy: { type: String, required: true },
  ip: { type: String, required: true },
  date: { type: Date, required: true },
  year: { type: Number, required: true },
  dist: { type: String, required: true },
});

fireballPredictionSchema.index(
  { des: 1, energy: 1, ip: 1, date: 1, dist: 1 },
  { unique: true },
);

const FireballPrediction = model("FireballPredict", fireballPredictionSchema);

FireballPrediction.findByDate = async (search_year) =>
  await FireballPrediction.find({
    year: search_year,
  });

export default FireballPrediction;
