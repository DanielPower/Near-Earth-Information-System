import React, { useState } from 'react';
import useAxios from 'axios-hooks';
import dayjs from 'dayjs';
import ScrollableList from '../ScrollableList/ScrollableList';
import styles from './Nhats.module.css';

const Nhats = () => {
  const [selectedNhats, setSelectedNhats] = useState(null);
  const [minDate, setMinDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [maxDate, setMaxDate] = useState(
    dayjs().add(50, 'year').format('YYYY-MM-DD'),
  );
  const [{ data: nhatss, loading, error }] = useAxios({
    url: 'http://localhost:3000/nhats',
    params: {
      minDate,
      maxDate,
    },
  });

  if (loading) {
    return 'loading';
  }

  if (error) {
    return 'error';
  }

  return (
    <>
      <div className={styles.title}>
        Near-Earth Object Human Space Flight Accessible Targets Study
      </div>
      {selectedNhats ? (
        <>
          <button type="button" onClick={() => setSelectedNhats(null)}>
            Back
          </button>
          {[
            ['Designation', 'des'],
            ['Size at furthest point in approach', 'minSize'],
            ['Size at nearest point in approach', 'maxSize'],
            ['Observation start date', 'obsStart'],
            ['Observation end date', 'obsEnd'],
            ['Percieved brightness', 'obsMag'],
          ].map(([title, key]) => (
            <div key={key} className={styles.key}>
              {`${title}: ${nhatss[selectedNhats][key]}`}
            </div>
          ))}
        </>
      ) : (
        <>
          <div>
            {'Minimum date: '}
            <input
              value={minDate}
              onChange={(event) => setMinDate(event.target.value)}
              type="date"
            />
          </div>
          <div>
            {'Maximum date: '}
            <input
              value={maxDate}
              onChange={(event) => setMaxDate(event.target.value)}
              type="date"
            />
          </div>
          <div className={styles.table}>
            <ScrollableList>
              {nhatss.map((nhats, index) => (
                <div key={index} onClick={() => setSelectedNhats(index)}>
                  {nhats.des}
                </div>
              ))}
            </ScrollableList>
          </div>
        </>
      )}
    </>
  );
};

export default Nhats;
