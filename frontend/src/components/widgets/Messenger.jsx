import React, { useState } from 'react';
import useAxios from 'axios-hooks';
import ScrollableList from '../ScrollableList/ScrollableList';
import dayjs from 'dayjs';
import styles from '../Messenger.module.css';

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
  let tempMessage = Array.from(messages);

  return (
    <>
      <div className={styles.row}>
        <input
          placeholder="Title"
          onChange={(event) => setTitleValue(event.target.value)}
          className={styles.textboxes}
        />
        <input
          placeholder="Message"
          onChange={(event) => setMessageValue(event.target.value)}
          className={styles.textboxes}
        />
        <button
          className={styles.textboxes}
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
      </div>
      <div className={styles.board}>
        <ScrollableList>
          {tempMessage.reverse().map((message) => {
            const date = dayjs(message.date).format('YYYY-MM-DD h:mmA');
            return (
              <div className={styles.message} key={message._id}>
                <div className={styles.title}>{message.title}</div>
                <div className={styles.date}>{date}</div>
                <div className={styles.body}>{message.body}</div>
              </div>
            );
          })}
        </ScrollableList>
      </div>
    </>
  );
};

export default Messenger;
