import React from 'react';
import Widget from './components/Widget';
import Nhats from './components/widgets/Nhats';
import SolarSystem from './components/widgets/SolarSystem';
import FireballCollision from './components/widgets/FireballCollisions';
import styles from './App.module.css';
import FireballPrediction from './components/widgets/FireballPredictions';
import Countdown from './components/widgets/Countdown';
import Messenger from './components/widgets/Messenger';

const App = () => {
  const widgets = [
    { title: 'NHATS', component: Nhats },
    { title: 'COUNTDOWN', component: Countdown },
    { title: 'MESSENGER', component: Messenger },
    {
      title: 'Solar System Bodies',
      component: SolarSystem,
    },
    {
      title: 'Past FireBall Collisions',
      component: FireballCollision,
    },
    {
      title: 'Future Impact Predictions',
      component: FireballPrediction,
    },
  ];
  return (
    <div className={styles.row}>
      {widgets.map((widget) => (
        <Widget key={widget.title} title={widget.title}>
          <widget.component />
        </Widget>
      ))}
    </div>
  );
};

export default App;
