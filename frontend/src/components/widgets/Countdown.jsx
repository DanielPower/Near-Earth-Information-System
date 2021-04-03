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
  const [distance, setDistance] = useState(0.3);
  const [tempDistance, setTempDistance] = useState(0.3);

  const [{ data, loading, error }] = useAxios({
    url: 'https://ssd-api.jpl.nasa.gov/cad.api',
    params: {
      'date-min': minDate,
      'date-max': maxDate,
      pha: filter === 'pha',
      nea: filter === 'nea',
      comet: filter === 'comet',
      'dist-max': distance,
      body: 'Earth',
    },
  });

  if (loading) return 'loading';
  if (error) return 'error';

  const { data: Countdowns } = data;

  return (
    <>
      <div>
        <div className={styles.object}>
          <label>Object:</label>
          <select
            name="object"
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
            className={styles.textboxes}
          >
            <option>pha</option>
            <option>nea</option>
            <option>comet</option>
          </select>
        </div>
        <div className={styles.object}>
          <label>Maximum distance(au):</label>
          <input
            value={tempDistance}
            onChange={(event) => setTempDistance(event.target.value)}
            className={styles.textboxes}
          />
          <button
            type="button"
            value={distance}
            onClick={() => setDistance(tempDistance)}
            className={styles.textboxes}
          >
            Add
          </button>
        </div>
        <div className={styles.object}>
          <label>Date Range:</label>
          <input
            type="date"
            value={minDate}
            onChange={(event) => setMinDate(event.target.value)}
            className={styles.textboxes}
          />
          <input
            type="date"
            value={maxDate}
            onChange={(event) => setMaxDate(event.target.value)}
            className={styles.textboxes}
          />
          <button type="button" className={styles.textboxes}>
            Add
          </button>
        </div>
      </div>
      <div className={styles.listContainer}>
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
                _body,
                _h,
              ],
              index,
            ) => (
              <div key={index} className={styles.dataInput}>
                {`${des} will close-approach Earth at: ${cd} at a distance of ${dist} AU`}
              </div>
            ),
          )}
        </ScrollableList>
      </div>
    </>
  );
};

export default Countdown;
