import React from 'react';
import useAxios from 'axios-hooks';
import ScrollableList from '../ScrollableList/ScrollableList';

//Today date function from https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
var todayDate = new Date();
var d = String(todayDate.getDate()).padStart(2,'0');
var m = String(todayDate.getMonth() + 1).padStart(2, '0');
var y = todayDate.getFullYear();
todayDate = y + '/' + m + '/' + d;
var centuryDate = (y+100) + '/' + m + '/' + d;


//date-min=1900-01-01&date-max=2100-01-01
const Countdown = () => {
  const [{ data, loading, error }] = useAxios(
    ('https://ssd-api.jpl.nasa.gov/cad.api?date-min=' + todayDate +'&date-max='+centuryDate),
  );

  if (loading) return 'loading';
  if (error) return 'error';

  const { data: Countdowns } = data;


//need to test, and then ge the time between NEO and today
//what to use instead of map(countdown)?

  return (
    <ScrollableList>
      {Countdowns.map((Countdown) => (
        <>{Countdown.cd}</>
      ))}
    </ScrollableList>
  );
};

export default Countdown;
