import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ScrollableList from '../ScrollableList/ScrollableList';

const Nhats = () => {
  const [nhatss, setNhatss] = useState([]);

  useEffect(() => {
    axios
      .get('https://ssd-api.jpl.nasa.gov/nhats.api')
      .then(({ data: { data } }) => {
        setNhatss(data);
      });
  }, []);

  return (
    <ScrollableList>
      {nhatss.map((nhats) => (
        <>{nhats.des}</>
      ))}
    </ScrollableList>
  );
};

export default Nhats;
