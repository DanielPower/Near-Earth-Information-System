import mongoose from "mongoose";

const { Schema, model } = mongoose;

const messageSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, requried: true },
  date: { type: Date, required: true },
});

const Message = model("Message", messageSchema);

export default Message;
