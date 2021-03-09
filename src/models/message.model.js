import mongoose from "mongoose";

const { Schema, model } = mongoose;

const messageSchema = new Schema({
  title: { type: String, required: true},
  body: { type: String, required: true },
  date: { type: Date, required: true },
});

const messages = model("Message", messageSchema);

// messages.create = async (inTitle, inBody, inDate) =>
//     await messages.insertMany({
//         title: inTitle, 
//         body: inBody, 
//         date: inDate,
//   });

messages.getMessage = async (retrieve) =>
    await messages.find({
    title: retrieve,
  });


export default messages;
