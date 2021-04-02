import React, { useState, useEffect } from 'react';
import useAxios from 'axios-hooks';
import ScrollableList from '../ScrollableList/ScrollableList';

const Nhats = () => {
  const [selectedNhatsDes, setSelectedNhatsDes] = useState(null);

  const [
    { data: { data: nhatss } = {}, loading: nhatsLoading, error: nhatsError },
  ] = useAxios('https://ssd-api.jpl.nasa.gov/nhats.api');

  const [
    {
      data: selectedNhatsData,
      loading: selectedNhatsLoading,
      error: selectedNhatsError,
    },
    getSelectedNhatsData,
  ] = useAxios('https://ssd-api.jpl.nasa.gov/nhats.api', { manual: true });

  console.log(selectedNhatsData);

  useEffect(() => {
    if (selectedNhatsDes) {
      getSelectedNhatsData({
        params: {
          des: selectedNhatsDes,
        },
      });
    }
  }, [selectedNhatsDes]);

  if (nhatsError || selectedNhatsError) {
    return 'error';
  }

  if (selectedNhatsDes) {
    if (selectedNhatsLoading) {
      return 'loading';
    }

    return (
      <>
        <button type="button" onClick={() => setSelectedNhatsDes(null)}>
          Back
        </button>
        {[
          ['Designation', 'des'],
          ['Date computed', 'computed'],
          ['Size at nearest point in approach', 'max_size'],
          ['Observation start date', 'obs_start'],
          ['Observation end date', 'obs_end'],
          ['Percieved brightness', 'obs_mag'],
        ].map(([title, key]) => (
          <span>
            <div>{title}</div>
            <div>{selectedNhatsData[key]}</div>
          </span>
        ))}
        <div>{selectedNhatsDes}</div>
      </>
    );
  }

  if (nhatsLoading) {
    return 'loading';
  }

  return (
    <ScrollableList>
      {nhatss.map((nhats, index) => (
        <div key={index} onClick={() => setSelectedNhatsDes(nhats.des)}>
          {nhats.des}
        </div>
      ))}
    </ScrollableList>
  );
};

export default Nhats;
