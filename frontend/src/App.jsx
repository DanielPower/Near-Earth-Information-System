import React from 'react';
import Widget from './components/Widget';
import Nhats from './components/widgets/Nhats';
import SolarSystem from './components/widgets/SolarSystem';
import FireballCollision from './components/widgets/FireballCollisions';
import styles from './App.module.css';
import FireballPrediction from './components/widgets/FireballPredictions';

const App = () => {
  const widgets = [
    { title: 'NHATS', key: 'nhats', component: Nhats },
    {
      title: 'Solar System Bodies',
      key: 'SolarSystem',
      component: SolarSystem,
    },
    {
      title: 'Past FireBall Collisions',
      key: 'collision',
      component: FireballCollision,
    },
    {
      title: 'Future Impact Predictions',
      key: 'probabilities',
      component: FireballPrediction,
    },
  ];
  return (
    <div className={styles.row}>
      {widgets.map((widget) => (
        <Widget title={widget.title}>
          <widget.component key={widget.key} />
        </Widget>
      ))}
    </div>
  );
};

export default App;
