import React, { useState, useEffect } from 'react';
import useAxios from 'axios-hooks';
import styles from './fireballCollisions.module.css';
import ScrollableList from '../ScrollableList/ScrollableList';

const FireballCollision = () => {
  const [latInput, setLatInput] = useState(null);
  const [lonInput, setLonInput] = useState(null);
  const [distInput, setDistInput] = useState(null);

  const [{ data: collisions, loading, error }, refetchCollisions] = useAxios(
    {
      url: 'http://localhost:3000/collisions',
      params: {
        lat: latInput,
        lon: lonInput,
        distance: distInput,
      },
    },
    { manual: true },
  );
  if (error) return 'error';
  console.log(collisions);

  return (
    <>
      <div className={styles.centerContents}>
        <div className={styles.userInput}>
          <div className={styles.latitude}>
            <div>Latitude</div>
            <input
              value={latInput}
              placeholder="Enter Latitude (Mandatory)"
              className={styles.inputField}
              onChange={(event) => {
                setLatInput(event.target.value);
              }}
            />
          </div>
          <div className={styles.longitude}>
            <div>Longitude</div>
            <input
              value={lonInput}
              placeholder="Enter Longitude (Mandatory)"
              onChange={(event) => {
                setLonInput(event.target.value);
              }}
              className={styles.inputField}
            />
          </div>
          <div className={styles.distance}>
            <div>Search Distance</div>
            <input
              value={distInput}
              placeholder="Enter search distance (Mandatory)"
              onChange={(event) => {
                setDistInput(event.target.value);
              }}
              className={styles.inputField}
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
          </div>
        </div>
      </div>
      <div className={styles.dataDisplay}>
        {loading
          ? 'loading'
          : collisions && (
              <ScrollableList>
                {collisions.map(({ date, impactEnergy, lat, lon }, index) => (
                  <div key={index}>
                    {`${date} ${impactEnergy} ${lat} ${lon}`}
                  </div>
                ))}
              </ScrollableList>
            )}
      </div>
    </>
  );
};
export default FireballCollision;
