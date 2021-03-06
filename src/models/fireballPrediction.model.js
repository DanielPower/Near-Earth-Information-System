import mongoose from "mongoose";

const { Schema, model } = mongoose;

const fireballPredictSchema = new Schema({
  des: { type: String, required: true },
  energy: { type: String, required: true },
  ip: { type: String, required: true },
  date: { type: Date, required: true },
  year: { type: Number, required: true },
  dist: { type: String, required: true },
});

fireballPredictSchema.index(
  { des: 1, energy: 1, ip: 1, date: 1, dist: 1 },
  { unique: true },
);

const FireballPredict = model("FireballPredict", fireballPredictSchema);

FireballPredict.findByDate = async (search_year) =>
  await FireballPredict.find({
    year: search_year,
  });

export default FireballPredict;
