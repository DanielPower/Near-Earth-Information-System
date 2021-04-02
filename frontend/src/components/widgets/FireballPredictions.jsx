import React, { useState } from 'react';
import useAxios from 'axios-hooks';
import styles from './FireballPredictions.module.css';

const FireballPrediction = () => {
  const [yearMin, setyearMin] = useState(null);
  const [yearMax, setyearMax] = useState(null);
  const [ipMin, setIpMin] = useState(null);
  const [ipMax, setIpMax] = useState(null);

  return (
    <>
      <div className={styles.centerContents}>
        <div className={styles.years}>
          <input
            value={yearMin}
            className={styles.yearMinInput}
            placeholder="Optional Min Year (0 by default)"
            onChange={(event) => {
              setyearMin(event.target.value);
            }}
          />
          <input
            value={yearMax}
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
        //<div className={styles.listContainer}></div>
      </div>
    </>
  );
};

export default FireballPrediction;
