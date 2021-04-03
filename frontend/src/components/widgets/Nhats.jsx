import React, { useState } from 'react';
import useAxios from 'axios-hooks';
import ScrollableList from '../ScrollableList/ScrollableList';
import styles from './Nhats.module.css';

const Nhats = () => {
  const [selectedNhats, setSelectedNhats] = useState(null);
  const [{ data: nhatss, loading, error }] = useAxios(
    'http://localhost:3000/nhats',
  );

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
        <ScrollableList>
          {nhatss.map((nhats, index) => (
            <div key={index} onClick={() => setSelectedNhats(index)}>
              {nhats.des}
            </div>
          ))}
        </ScrollableList>
      )}
    </>
  );
};

export default Nhats;
