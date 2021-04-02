import React from 'react';
import Widget from './components/Widget';
import Nhats from './components/widgets/Nhats';
import Countdown from './components/widgets/Countdown';
import Messenger from './components/widgets/Messenger';

const App = () => {
  const widgets = [
    { title: 'NHATS', component: Nhats },
    { title: 'COUNTDOWN', component: Countdown },
    { title: 'MESSENGER', component: Messenger },
  ];
  return (
    <>
      {widgets.map((widget) => (
        <Widget key={widget.title} title={widget.title}>
          <widget.component />
        </Widget>
      ))}
    </>
  );
};

export default App;
