import React from 'react';
import useAxios from 'axios-hooks';
import ScrollableList from '../ScrollableList/ScrollableList';

const Nhats = () => {
  const [{ data, loading, error }] = useAxios(
    'https://ssd-api.jpl.nasa.gov/nhats.api',
  );

  if (loading) return 'loading';
  if (error) return 'error';

  const { data: nhatss } = data;

  return (
    <ScrollableList>
      {nhatss.map((nhats) => (
        <>{nhats.des}</>
      ))}
    </ScrollableList>
  );
};

export default Nhats;
