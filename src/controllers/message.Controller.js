import dayjs from "dayjs";

import messages from "../models/message.model.js";

export const postMessage = async (req, res) => {
  const { inTitle, inBody, inDate} = req.query;
  const message = await messages.postMessage(
    new String(inTitle),
    new String(inBody),
    new Date(inDate),
  );
  
  res.send(message);

};

export const getMessage = async (res) => {
    
    const message = await messages.getMessage(
        
    );
    res.send(
        message.map(({ title, body, date, }) => ({
        title, 
        body,
        date,
      })),
    );
  };
  


