import React from 'react';
import useAxios from 'axios-hooks';
import ScrollableList from '../ScrollableList/ScrollableList';

// Today date function from https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
let todayDate = new Date();
const d = String(todayDate.getDate()).padStart(2, '0');
const m = String(todayDate.getMonth() + 1).padStart(2, '0');
const y = todayDate.getFullYear();
todayDate = `${y}-${m}-${d}`;
const centuryDate = `${y + 100}-${m}-${d}`;

// let filter = '';
// function setFilter(newFilter) {
//   filter = '&' + newFilter;
// }
// function openFilter() {
//   if (document.getElementById('NEOBox').style.visibility === 'hidden') {
//     document.getElementById('NEOBox').style.visibility = 'visible';
//   } else {
//     document.getElementById('NEOBox').style.visibility = 'hidden';
//   }
// }

const Countdown = () => {
  const [{ data, loading, error }] = useAxios(
    'https://ssd-api.jpl.nasa.gov/cad.api?date-min=' +
      todayDate +
      '&date-max=' +
      centuryDate,
  );

  if (loading) return 'loading';
  if (error) return 'error';

  const { data: Countdowns } = data;

  // need to test, and then ge the time between NEO and today
  // what to use instead of map(countdown)?

  return (
    <>
      <label>NEO(Near Earth Objects</label>
      <button type="button" id="NEOfilter" />
      <div id="NEOBox">
        <label>Object:</label>
        <select name="object" id="object">
          <option id="NHAs">NHAs</option>
          <option id="NEAs">NEAs</option>
          <option id="Comets">Comets</option>
        </select>
        <button type="button" id="Add">
          Add
        </button>
        <br />
        <label>Distance:</label>
        <input id="Distance" />
        <button type="button" id="Add2" onClick={null}>
          Add
        </button>
        <br />
        <label>Date Range:</label>
        <br />
        <input type="date" id="DateStart" name="date-start" value={todayDate} />
        <input type="date" id="DateEnd" name="date-end" value={todayDate} />
        <button type="button" id="Add2">
          Add
        </button>
        <br />
      </div>

      <ScrollableList>
        {Countdowns.map(
          (
            [
              des,
              _orbitId,
              _jd,
              cd,
              _dist,
              _distMin,
              _distMax,
              _vRel,
              _vInf,
              _tSigmaF,
              _h,
            ],
            index,
          ) => (
            <div key={index}>{`${des} will close-approach at: ${cd}`}</div>
          ),
        )}
      </ScrollableList>
    </>
  );
};

export default Countdown;
