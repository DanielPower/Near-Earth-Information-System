import React from 'react';
import Widget from './components/Widget';
import Nhats from './components/widgets/Nhats';

const App = () => {
  const widgets = [{ title: 'NHATS', key: 'nhats', component: Nhats }];
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
