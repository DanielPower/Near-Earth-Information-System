import React, { useState } from 'react';
import useAxios from 'axios-hooks';
import ScrollableList from '../ScrollableList/ScrollableList';
import styles from '../Countdown.module.css';
// import {useState} from 'react';

const Messenger = () => {
  const [titleValue, setTitleValue] = useState('');
  const [messageValue, setMessageValue] = useState('');

  const [{ data: messages, loading, error }, reloadMessages] = useAxios(
    'http://localhost:3000/messages',
  );

  const [_, postMessage] = useAxios(
    {
      url: 'http://localhost:3000/messages',
      method: 'POST',
    },
    { manual: true },
  );

  if (loading) return 'loading';
  if (error) return 'error';

  return (
    <>
      <ScrollableList>
        {messages.map((message) => (
          <div key={message._id}>
            {message.title}
            {message.body}
            {message.date}
          </div>
        ))}
      </ScrollableList>
      <div>
        <input
          placeholder="Title"
          onChange={(event) => setTitleValue(event.target.value)}
        />
      </div>
      <div>
        <input
          placeholder="Message"
          onChange={(event) => setMessageValue(event.target.value)}
        />
      </div>
      <button
        type="button"
        onClick={() => {
          postMessage({
            data: {
              title: titleValue,
              body: messageValue,
            },
          }).then(() => {
            reloadMessages();
          });
        }}
      >
        Submit
      </button>
    </>
  );
};

export default Messenger;
