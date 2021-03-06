import mongoose from "mongoose";

const { Schema, model } = mongoose;


const NEOSchema = new Schema({
    des: { type: String, required: true, index: true },
    dist_min: { type: String, required: true },
    dist_max: { type: String, required: true },
    dist: { type: String, required: true },
    body: { type: String, required: true },
    cd: { type: String, required: true },
  });


  const NEO = model("NEO", NEOSchema);

  export default NEO;