import { Timeline } from 'react-twitter-widgets';
import React from 'react';

const Twitter = () => {
  return (
      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: 'NASA',
        }}
        options={{ theme: 'dark', height: '400', width: '100%' }}
      />
  );
};

export default Twitter;
