import React from 'react';
import Widget from './components/Widget';

const App = () => {
  const widgets = ['foo', 'bar', 'tar'];
  return (
    <>
      {widgets.map((content) => (
        <Widget>{content}</Widget>
      ))}
    </>
  );
};

export default App;
