import mongoose from "mongoose";

const { Schema, model } = mongoose;

const NHATSSchema = new Schema({
  des: { type: String, required: true, unique: true },
  minSize: { type: Number, required: true },
  maxSize: { type: Number, required: true },
  obsStart: { type: Date, required: true },
  obsEnd: { type: Date, required: true },
  obsMag: { type: Number, required: true },
});

const NHATS = model("NHATS", NHATSSchema);

NHATS.findByDateRange = async (minDate, maxDate) =>
  await NHATS.find({
    obsStart: { $not: { $gt: maxDate } },
    obsEnd: { $not: { $lt: minDate } },
  });

export default NHATS;
