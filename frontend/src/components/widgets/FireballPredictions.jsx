import React, { useState } from 'react';
import useAxios from 'axios-hooks';
import styles from './FireballPredictions.module.css';
import ScrollableList from '../ScrollableList/ScrollableList';

const FireballPrediction = () => {
  const [minYear, setyearMin] = useState('');
  const [maxYear, setyearMax] = useState('');
  const [ipMin, setIpMin] = useState('');
  const [ipMax, setIpMax] = useState('');

  const [{ data: predictions, loading, error }, refetchCollisions] = useAxios(
    {
      url: 'http://localhost:3000/predictions',
      params: {
        yearMin: minYear === '' ? 0 : minYear,
        yearMax: maxYear === '' ? 9999 : maxYear,
        probMin: ipMin === '' ? 0.001 : ipMin,
        probMax: ipMax === '' ? 100 : ipMax,
      },
    },
    { manual: true },
  );
  if (error) return 'error';
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
            onClick={() => refetchCollisions()}
          >
            Search
          </button>
          <div className={styles.itemHeaders}>
            <div>Descriptor</div>
            <div>Impact Energy</div>
            <div>Probability</div>
            <div>Date</div>
            <div>Distance</div>
          </div>
        </div>
        <div className={styles.listContainer}>
          {loading
            ? 'loading'
            : predictions && (
                <ScrollableList>
                  {predictions.map(
                    ({ des, energy, ip, date, year, dist }, index) => (
                      <div key={index} className={styles.itemContainer}>
                        <div>{des}</div>
                        <div>{energy}</div>
                        <div>{ip}</div>
                        <div>{date}</div>
                        <div>{dist}</div>
                      </div>
                    ),
                  )}
                </ScrollableList>
              )}
        </div>
      </div>
    </>
  );
};

export default FireballPrediction;
