import React from 'react';
import Widget from './components/Widget';
import Nhats from './components/widgets/Nhats';
import SolarSystem from './components/widgets/SolarSystem';
import FireballCollision from './components/widgets/FireballCollisions';
import FireballPrediction from './components/widgets/FireballPredictions';
import NearEarthObjects from './components/widgets/Countdown';
import Messenger from './components/widgets/Messenger';
import InternationalSpaceStation from './components/widgets/InternationalSpaceStation';
import Twitter from './components/widgets/Twitter';
import styles from './App.module.css';

const App = () => {
  const nhats = { title: 'NHATS', Component: Nhats };
  const nearEarthObjects = {
    title: 'Near Earth Objects',
    Component: NearEarthObjects,
  };
  const messenger = { title: 'Messenger', Component: Messenger };
  const solarSystem = {
    title: 'Solar System Bodies',
    Component: SolarSystem,
  };
  const fireballCollision = {
    title: 'Past Fireball Collisions',
    Component: FireballCollision,
  };
  const fireballPrediction = {
    title: 'Future Impact Predictions',
    Component: FireballPrediction,
  };
  const twitter = {
    title: 'NASA Twitter',
    Component: Twitter,
  };
  const internationalSpaceStation = {
    title: 'International Space Station Location',
    Component: InternationalSpaceStation,
  };

  const rows = [
    [solarSystem, nhats],
    [fireballCollision, fireballPrediction],
    [nearEarthObjects, internationalSpaceStation],
    [twitter, messenger],
  ];

  return (
    <>
      {rows.map((widgets, index) => (
        <div key={index} className={styles.row}>
          {widgets.map(({ title, Component }) => (
            <Widget key={title} title={title}>
              <Component />
            </Widget>
          ))}
        </div>
      ))}
    </>
  );
};

export default App;
