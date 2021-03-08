import mongoose from "mongoose";

const { Schema, model } = mongoose;

const fireballCollisionsSchema = new Schema({
  date: { type: String, required: true },
  impactEnergy: { type: String, required: true },
  lat: { type: String, required: true },
  lon: { type: String, required: true },
});

fireballCollisionsSchema.index(
  {
    date: 1,
    impactEnergy: 1,
    lat: 1,
    lon: 1,
  },
  { unique: true },
);

const FireballCollisions = model(
  "FireballCollisions",
  fireballCollisionsSchema,
);

//returns all collisions
FireballCollisions.findByDistance = async () =>
  await FireballCollisions.find({});

export default FireballCollisions;
