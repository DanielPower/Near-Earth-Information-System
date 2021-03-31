import React from 'react';
import useAxios from 'axios-hooks';
import ScrollableList from '../ScrollableList/ScrollableList';



//Today date function from https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
let todayDate = new Date();
const d = String(todayDate.getDate()).padStart(2, '0');
const m = String(todayDate.getMonth() + 1).padStart(2, '0');
const y = todayDate.getFullYear();
todayDate = y + '/' + m + '/' + d;


//useful for timestamping


//date-min=1900-01-01&date-max=2100-01-01
const messenger = () => {
  const [{ data, loading, error }] = useAxios(
    ('http://localhost:8080/messages'),
  );
  
  if (loading) return 'loading';
  if (error) return 'error';

  //const { data: } = data;
  
  const { data: messages } = data;


//need to test, and then ge the time between NEO and today
//what to use instead of map(countdown)?

  return (
    <>

    <label for = 'msgTitle'>Title</label>
    <input id = 'msgTitle'></input>
    <label for = 'msgBody'>Body</label>
    <input id = 'msgBody'></input>

    <label for = 'messageList'></label>

{/* gonna get it up on the site and working, than i'll filter properly */}
  <ScrollableList id = 'messageList'>
      <div key={messages.messenger.title}>
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

export default messenger;
