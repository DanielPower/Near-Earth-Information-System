import React from 'react';
import useAxios from 'axios-hooks';
import ScrollableList from '../ScrollableList/ScrollableList';

//Today date function from https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
var todayDate = new Date();
var d = String(todayDate.getDate()).padStart(2,'0');
var m = String(todayDate.getMonth() + 1).padStart(2, '0');
var y = todayDate.getFullYear();
todayDate = y + '/' + m + '/' + d;

//useful for timestamping


//date-min=1900-01-01&date-max=2100-01-01
const messenger = () => {
  const [{ data, loading, error }] = useAxios(
    (db.messenger),
  );

  if (loading) return 'loading';
  if (error) return 'error';

  //const { data: } = data;
  
  const { data: messages } = data;


//need to test, and then ge the time between NEO and today
//what to use instead of map(countdown)?

  return (
    <>
  <label for ='messageList'></label>
  
  

{/* gonna get it up on the site and working, than i'll filter properly */}
  <ScrollableList id = 'messageList'>
      <label>
    {messages.map((messenger) => (
      <>{messenger.title}</>
    ))}
    </label>
    <body>
    {messages.map((messenger) => (
      <>{messenger.body}</>
    ))}
    </body>
    <label>
    {messages.map((messenger) => (
      <>{messenger.date}</>
    ))}
    </label>
  </ScrollableList>
    </>
  );
};

export default messenger;
