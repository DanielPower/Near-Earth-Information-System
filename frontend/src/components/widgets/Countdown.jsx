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

var filter = '';
function setFilter(newFilter){
  filter = '&' + newFilter;
}
function openFilter(){
if(document.getElementById('NEOBox').style.visibility == hidden){
  document.getElementById('NEOBox').style.visibility = visible;
}
else{
  document.getElementById('NEOBox').style.visibility = hidden;
}
}


//date-min=1900-01-01&date-max=2100-01-01
const Countdown = () => {
  const [{ data, loading, error }] = useAxios(
    ('https://ssd-api.jpl.nasa.gov/cad.api?date-min=' + todayDate +'&date-max='+centuryDate + filter),
  );

  if (loading) return 'loading';
  if (error) return 'error';

  const { data: Countdowns } = data;


//need to test, and then ge the time between NEO and today
//what to use instead of map(countdown)?

  return (
    <>
  <label for ='NEOclose'>NEO(Near Earth Objects</label>
  <button id = 'NEOclose' onclick = 'openFilter()'></button>
  {/* i know a div here is bad form,. what else shoudl i use */}
  <div id = 'NEOBox' style = "visibility: hidden;">
  <form>
    <label for="object">Object:</label>
    <select name="object" id="object">
      <option id = 'NHAs'>NHAs</option>
      <option id = 'NEAs'>NEAs</option>
      <option id = 'Comets'>Comets</option>  
    </select> 
  </form>
  <button id = 'Add' onclick = "setFilter('')" >Add</button><br></br>
  <label for ='Distance'>Distance:</label>
  <input id = 'Distance'>between x and x2</input>
  <button id = 'Add2' onclick = "setFilter('')" >Add</button><br></br>
  <label for ='DateStart'>Date Range:</label><br></br>
  <input type="date" id="DateStart" name="date-start"
       value = {todayDate}></input>
  <input type="date" id="DateEnd" name="date-end"
       value = {todayDate}></input>
  <button id = 'Add2' onclick = "setFilter('')" >Add</button><br></br>
  </div>

{/* gonna get it up on the site and working, than i'll filter properly */}
  <ScrollableList id = 'NEOclose'>
    {Countdowns.map((countdown) => (
      <>{countdown.cd}</>
    ))}
  </ScrollableList>
    </>
  );
};


export default Countdown;