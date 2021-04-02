import React, { useState } from 'react';
import useAxios from 'axios-hooks';
import ScrollableList from '../ScrollableList/ScrollableList';

const Messenger = () => {
  const [titleValue, setTitleValue] = useState('');
  const [messageValue, setMessageValue] = useState('');

  const [{ data: messages, loading, error }] = useAxios(
    'http://localhost:3000/messages',
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
    </>
  );
};

export default Messenger;
