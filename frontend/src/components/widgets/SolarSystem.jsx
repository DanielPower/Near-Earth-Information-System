import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './SolarSystem.module.css';
import mercury from '../../../public/mercury.svg';
import venus from '../../../public/venus.svg';
import mars from '../../../public/mars.svg';
import jupiter from '../../../public/jupiter.svg';
import saturn from '../../../public/saturn.svg';
import uranus from '../../../public/uranus.svg';
import neptune from '../../../public/neptune.svg';
import moon from '../../../public/moon.svg';
import ScrollableList from '../ScrollableList/ScrollableList';

const SolarSystem = () => {
  const [planet, setPlanet] = useState(null);
  const [planetData, setPlanetData] = useState([]);
  const [inputData, setInputData] = useState('100');
  const [planetName, setPlanetName] = useState('~');
  console.log(planetData);
  useEffect(() => {
    if (planet) {
      axios
        .get(
          `https://ssd-api.jpl.nasa.gov/cad.api?body=${planet}&dist-min=0&dist-max=${inputData}`,
        )
        .then((response) => {
          setPlanetData(response.data.data);
        });
    }
  }, [planet]);

  // pluto returns 400 error, so I excluded it
  const planets = [
    {
      img: mercury,
      className: styles.smallPlanet,
      name: 'Mercury',
      onClick: () => {
        setPlanet('merc');
      },
    },
    {
      img: venus,
      className: styles.mediumPlanet,
      name: 'Venus',
      onClick: () => {
        setPlanet('venus');
      },
    },
    {
      img: moon,
      className: styles.smallPlanet,
      name: 'Moon',
      onClick: () => {
        setPlanet('moon');
      },
    },
    {
      img: mars,
      className: styles.mediumPlanet,
      name: 'Mars',
      onClick: () => {
        setPlanet('mars');
      },
    },
    {
      img: jupiter,
      className: styles.largePlanet,
      name: 'Jupiter',
      onClick: () => {
        setPlanet('juptr');
      },
    },
    {
      img: saturn,
      className: styles.largePlanet,
      name: 'Saturn',
      onClick: () => {
        setPlanet('satrn');
      },
    },
    {
      img: uranus,
      className: styles.mediumPlanet,
      name: 'Uranus',
      onClick: () => {
        setPlanet('urnus');
      },
    },
    {
      img: neptune,
      className: styles.mediumPlanet,
      name: 'Neptune',
      onClick: () => {
        setPlanet('neptn');
      },
    },
  ];
  return (
    <>
      <div className={styles.planets}>
        <div className={styles.inputBox}>
          <input
            className={styles.inputField}
            placeholder="optional distance (100 by default)"
            onChange={(event) => {
              setInputData(event.target.value);
            }}
          />
        </div>
        <div className={styles.planetText}>{planetName}</div>
        {planets.map((planet) => (
          <img
            src={planet.img}
            className={planet.className}
            onClick={planet.onClick}
            onMouseEnter={() => setPlanetName(planet.name)}
            onMouseLeave={() => setPlanetName('~')}
          />
        ))}
        <div className={styles.listContainer}>
          <ScrollableList>
            {planetData.map(
              (
                [
                  des,
                  _orbit_id,
                  _jd,
                  cd,
                  dist,
                  _dist_min,
                  _dist_max,
                  _v_rel,
                  _v_inf,
                  _t_sigma_f,
                  _h,
                ],
                index,
              ) => (
                <div key={index} className={styles.scroll}>
                  <div className={styles.listItems}>{`${des}`}</div>
                  <div className={styles.listItems}>{`${cd}`}</div>
                  <div className={styles.listItems}>{` ${dist}`}</div>
                </div>
              ),
            )}
          </ScrollableList>
        </div>
      </div>
    </>
  );
};

export default SolarSystem;
