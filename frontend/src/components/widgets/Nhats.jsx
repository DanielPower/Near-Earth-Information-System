import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Nhats = () => {
  const [nhatss, setNhatss] = useState([]);

  useEffect(() => {
    axios
      .get('https://ssd-api.jpl.nasa.gov/nhats.api')
      .then(({ data: { data } }) => {
        setNhatss(data);
      });
  }, []);

  return <>{nhatss.map((nhats) => nhats.des)}</>;
};

export default Nhats;
