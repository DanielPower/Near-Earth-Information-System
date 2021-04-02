import React, { useState } from 'react';
import useAxios from 'axios-hooks';
import styles from './fireballCollisions.module.css';

const FireballCollision = () => {
  const [fireball, setFireball] = useState(null);
  return (
    <>
      <div className={styles.centerContents}>
        <div className={styles.userInput}>
          <div className={styles.latitude}>
            <div>Latitude</div>
            <input className={styles.inputField}></input>
          </div>
          <div className={styles.longitude}>
            <div>Longitude</div>
            <input className={styles.inputField}></input>
          </div>
          <div className={styles.distance}>
            <div>Search Distance</div>
            <input className={styles.inputField}></input>
          </div>
        </div>
        <div className={styles.dataDisplay}></div>
      </div>
    </>
  );
};
export default FireballCollision;
