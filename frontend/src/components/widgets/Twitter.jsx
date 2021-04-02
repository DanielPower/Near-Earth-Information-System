import { Timeline } from 'react-twitter-widgets';
import React from 'react';

const Twitter = () => {
  return (
    <>
      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: 'NASA',
        }}
        options={{ height: 400 }}
      />
    </>
  );
};

export default Twitter;
