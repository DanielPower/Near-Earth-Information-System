import mongoose from "mongoose";

const { Schema, model } = mongoose;

const fireballPredictSchema = new Schema({
  des: { type: String, required: true, index: true },
  energy: { type: String, required: true },
  ip: { type: String, required: true },
  date: { type: String, required: true },
  dist: { type: String, required: true },
});

const FireballPredict = model("FireballPredict", fireballPredictSchema);

export default FireballPredict;
