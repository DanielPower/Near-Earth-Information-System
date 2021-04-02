import React from 'react';
import Widget from './components/Widget';
import Nhats from './components/widgets/Nhats';
import SolarSystem from './components/widgets/SolarSystem';
import FireballCollision from './components/widgets/FireballCollisions';
import FireballPrediction from './components/widgets/FireballPredictions';
import NearEarthObjects from './components/widgets/Countdown';
import Messenger from './components/widgets/Messenger';
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
    title: 'Past FireBall Collisions',
    Component: FireballCollision,
  };
  const fireballPrediction = {
    title: 'Future Impact Predictions',
    Component: FireballPrediction,
  };

  const rows = [
    [solarSystem, nhats],
    [fireballCollision],
    [fireballPrediction],
    [nearEarthObjects, messenger],
  ];

  return (
    <>
      {rows.map((widgets) => (
        <div className={styles.row}>
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
