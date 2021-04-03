import React, { useState } from 'react';
import useAxios from 'axios-hooks';
import styles from './FireballPredictions.module.css';
import ScrollableList from '../ScrollableList/ScrollableList';

const FireballPrediction = () => {
  const [minYear, setyearMin] = useState(null);
  const [maxYear, setyearMax] = useState(null);
  const [ipMin, setIpMin] = useState(null);
  const [ipMax, setIpMax] = useState(null);

  const [{ data, loading, error }] = useAxios({
    url: 'http://localhost:3000/predictions',
    params: {
      yearMin: minYear,
      yearMax: maxYear,
      minProb: ipMin,
      maxProb: ipMax,
    },
  });

  if (loading) return 'loading';
  if (error) return 'error';

  const { data: predictions } = data;
  if (!predictions) {
    return 'loading';
  }
  return (
    <>
      <div className={styles.centerContents}>
        <div className={styles.years}>
          <input
            value={minYear}
            className={styles.yearMinInput}
            placeholder="Optional Min Year (0 by default)"
            onChange={(event) => {
              setyearMin(event.target.value);
            }}
          />
          <input
            value={maxYear}
            className={styles.yearMaxInput}
            placeholder="Optional Max Year (9999 by default)"
            onChange={(event) => {
              setyearMax(event.target.value);
            }}
          />
        </div>
        <div className={styles.ip}>
          <input
            value={ipMin}
            className={styles.ipMinInput}
            placeholder="Optional Min Probability (0.001 by default)"
            onChange={(event) => {
              setIpMin(event.target.value);
            }}
          />
          <input
            value={ipMax}
            className={styles.ipMaxInput}
            placeholder="Optional Max Probability (100 by default)"
            onChange={(event) => {
              setIpMax(event.target.value);
            }}
          />
        </div>
        <div className={styles.buttonContainer}>
          <button
            type="button"
            className={styles.searchButton}
            onClick={(() => setIpMin, setIpMax, setyearMin, setyearMax)}
          >
            Search
          </button>
        </div>
        <div className={styles.listContainer}>
          <ScrollableList>
            {predictions.map(([des, energy, ip, date, year, dist], index) => (
              <div key={index}>
                {`${des} ${energy} ${ip} ${date} ${year} ${dist}`}
              </div>
            ))}
          </ScrollableList>
        </div>
      </div>
    </>
  );
};

export default FireballPrediction;
