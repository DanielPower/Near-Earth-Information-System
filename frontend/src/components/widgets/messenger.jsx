import React from 'react';
import useAxios from 'axios-hooks';
import ScrollableList from '../ScrollableList/ScrollableList';

const Messenger = () => {
  const [{ data, loading, error }] = useAxios('http://localhost:3000/messages');

  console.log(error)
  if (loading) return 'loading';
  if (error) return 'error';

  const { data: messages } = data;

  return (
    <>
      <label for="msgTitle">Title</label>
      <input id="msgTitle"></input>
      <label for="msgBody">Body</label>
      <input id="msgBody"></input>

      <label for="messageList"></label>

      {/* gonna get it up on the site and working, than i'll filter properly */}
      <ScrollableList id="messageList">
        <div key={messages.messenger.title + messages.messenger.date}>
          <label>
            <>{messages.messenger.title}</>
          </label>
          <body>
            <>{messages.messenger.body}</>
          </body>
          <label>
            <>{messages.messenger.date}</>
          </label>
        </div>
      </ScrollableList>
    </>
  );
};

export default Messenger;
