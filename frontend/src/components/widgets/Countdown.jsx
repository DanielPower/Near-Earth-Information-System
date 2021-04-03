import React, { useState } from 'react';
import dayjs from 'dayjs';
import useAxios from 'axios-hooks';
import ScrollableList from '../ScrollableList/ScrollableList';
import styles from '../Countdown.module.css';

const Countdown = () => {
  const [minDate, setMinDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [maxDate, setMaxDate] = useState(
    dayjs().add(50, 'year').format('YYYY-MM-DD'),
  );
  const [filter, setFilter] = useState('pha');
  const [distance, setDistance] = useState(0.5);
  const [tempDistance, setTempDistance] = useState(0.5);

  let filterArr = [false, false, false];
  
 
  
    
  const [{ data, loading, error }] = useAxios({
    url: 'https://ssd-api.jpl.nasa.gov/cad.api',
    params: {
      'date-min': minDate,
      'date-max': maxDate,
      'pha': filter === 'pha',
      'nea': filter === 'nea',
      'comet': filter === 'comet',
      'dist-max': distance,
    },
  });

  if (loading) return 'loading';
  if (error) return 'error';

  const { data: Countdowns } = data;

  return (
    <>
      <label>NEO(Near Earth Objects</label>
      <div>
        <label>Object:</label>
        <select name="object" value={filter} onChange={(event) => setFilter(event.target.value)} className={styles.textboxes}>
          <option>pha</option>
          <option>nea</option>
          <option>comet</option>
        </select>
        
        <br />
        <label>Maximum distance:</label>
        <input value={tempDistance} 
          onChange={(event) => setTempDistance(event.target.value)} 
          className={styles.textboxes}/>
        <button type="button" value={distance} onClick={() => setDistance(tempDistance)} className={styles.textboxes}>
          Add
        </button>
        <br />
        <label>Date Range:</label>
        <br />
        <input
          type="date"
          value={minDate}
          onChange={(event) => setMinDate(event.target.value)}
          className={styles.textboxes}/>
        <input
          type="date"
          value={maxDate}
          onChange={(event) => setMaxDate(event.target.value)}
          className={styles.textboxes}
        />
        <button type="button" className={styles.textboxes}>Add</button>
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
              dist,
              _distMin,
              _distMax,
              _vRel,
              _vInf,
              _tSigmaF,
              body,
              _h,
            ],
            index,
          ) => (
            <div key={index}>{`${des} will close-approach ${body} at: ${cd} at a distance of ${dist} AU`}</div>
          ),
        )}
      </ScrollableList>
    </>
  );
};

export default Countdown;
