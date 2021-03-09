import dayjs from "dayjs";

import messages from "../models/message.model.js";

export const postMessage = async (req, res) => {
  const { inTitle, inBody, inDate} = req.query;
  const message = await messages.postMessage(
    new String(inTitle),
    new String(inBody),
    new Date(inDate),
  );
  
  res.create(
    title: inTitle,
    body: inBody,
    date: new Date(inDate),
   );
};

export const getMessage = async (req, res) => {
    const {inTitle} = req.query;
    
    const message = await messages.getMessage(
        new String(inTitle),
    );
    res.send(
        message.map(({ title, body, date, }) => ({
        title, 
        body,
        date,
      })),
    );
  };
  


