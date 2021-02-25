import mongoose from "mongoose";

const { Schema, model } = mongoose;

const planetSchema = new Schema({
  name: { type: String, required: true },
  id: { type: String, required: true },
});

const Planet = model("Planet", planetSchema);

export default Planet;
