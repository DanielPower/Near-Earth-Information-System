import React from 'react';
import useAxios from 'axios-hooks';
import ScrollableList from '../ScrollableList/ScrollableList';

const Messenger = () => {
  const [{ data: messages, loading, error }] = useAxios(
    'http://localhost:3000/messages',
  );

  if (loading) return 'loading';
  if (error) return 'error';

  return (
    <>
      <input id="msgTitle" />
      <input id="msgBody" />

      {/* gonna get it up on the site and working, than i'll filter properly */}
      <ScrollableList>
        {messages.map((message) => (
          <div key={message._id}>
            {message.title}
            {message.body}
            {message.date}
          </div>
        ))}
      </ScrollableList>
    </>
  );
};

export default Messenger;
