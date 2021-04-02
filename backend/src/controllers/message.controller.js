import Message from "../models/message.model.js";

export const postMessage = async (req, res) => {
  const { title, body } = req.body;

  const message = Message.create({
    title,
    body,
    date: new Date(),
  });

  res.status(201).send(message);
};

export const getMessages = async (_req, res) => {
  const messages = await Message.find({});
  res.send(messages);
};
