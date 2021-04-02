import React, { useState } from 'react';
import useAxios from 'axios-hooks';
import ScrollableList from '../ScrollableList/ScrollableList';

const Nhats = () => {
  const [selectedNhatsDes, setSelectedNhatsDes] = useState(null);
  const [
    { data: nhatsData, loading: nhatsLoading, error: nhatsError },
  ] = useAxios('https://ssd-api.jpl.nasa.gov/nhats.api');
  const [
    {
      data: selectedNhatsData,
      // loading: selectedNhatsLoading,
      // error: selectedNhatsError,
    },
  ] = useAxios(null);

  if (nhatsLoading) return 'loading';
  if (nhatsError) return 'error';

  const { data: nhatss } = nhatsData;

  return (
    <>
      {selectedNhatsData ? (
        <>
          <button type="button" onClick={() => setSelectedNhatsDes(null)}>
            Back
          </button>
          <div>{selectedNhatsDes}</div>
        </>
      ) : (
        <ScrollableList>
          {nhatss.map((nhats, index) => (
            <div key={index} onClick={() => setSelectedNhatsDes(nhats.des)}>
              {nhats.des}
            </div>
          ))}
        </ScrollableList>
      )}
    </>
  );
};

export default Nhats;
