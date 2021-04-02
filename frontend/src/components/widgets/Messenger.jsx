import React from 'react';
import useAxios from 'axios-hooks';
import ScrollableList from '../ScrollableList/ScrollableList';
import styles from '../Countdown.module.css';
import {useState} from 'react';

const Messenger = () => {
  const [{ data: messages, loading, error }] = useAxios(
    'http://localhost:3000/messages',
  );

  if (loading) return 'loading';
  if (error) return 'error';

  return (
    <>
      <input id="msgTitle" className={styles.textboxes}/>
      <input id="msgBody" className={styles.textboxes}/>
      <button type="button" id="messenger_input" 
      className={styles.textboxes} 
      onClick={}>Add</button>

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
