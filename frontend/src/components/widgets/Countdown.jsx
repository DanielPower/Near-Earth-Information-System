import React, { useState } from 'react';
import dayjs from 'dayjs';
import useAxios from 'axios-hooks';
import ScrollableList from '../ScrollableList/ScrollableList';

const Countdown = () => {
  const [minDate, setMinDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [maxDate, setMaxDate] = useState(
    dayjs().add(100, 'year').format('YYYY-MM-DD'),
  );
  const [{ data, loading, error }] = useAxios({
    url: 'https://ssd-api.jpl.nasa.gov/cad.api',
    params: {
      'date-min': minDate,
      'date-max': maxDate,
    },
  });

  if (loading) return 'loading';
  if (error) return 'error';

  const { data: Countdowns } = data;

  return (
    <>
      <label>NEO(Near Earth Objects</label>
      <button type="button" />
      <div>
        <label>Object:</label>
        <select name="object">
          <option>NHAs</option>
          <option>NEAs</option>
          <option>Comets</option>
        </select>
        <button type="button">Add</button>
        <br />
        <label>Distance:</label>
        <input />
        <button type="button" onClick={null}>
          Add
        </button>
        <br />
        <label>Date Range:</label>
        <br />
        <input
          type="date"
          value={minDate}
          onChange={(event) => setMinDate(event.target.value)}
        />
        <input
          type="date"
          value={maxDate}
          onChange={(event) => setMaxDate(event.target.value)}
        />
        <button type="button">Add</button>
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
