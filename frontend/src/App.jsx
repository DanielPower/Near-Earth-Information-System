import React from 'react';
import Widget from './components/Widget';
import Nhats from './components/widgets/Nhats';
import Countdown from './components/widgets/Countdown';
import Messenger from './components/widgets/messenger';

const App = () => {
  const widgets = [{ title: 'NHATS', key: 'nhats', component: Nhats },
    { title: 'COUNTDOWN', key: 'countdown', component: Countdown },
    { title: 'MESSENGER', key: 'messenger', component: Messenger }];
  return (
    <>
      {widgets.map((widget) => (
        <Widget title={widget.title}>
          <widget.component key={widget.key} />
        </Widget>
      ))}
    </>
  );
};

export default App;
