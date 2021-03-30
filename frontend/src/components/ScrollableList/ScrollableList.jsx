import React from 'react';
import './ScrollableList.css';

const ScrollableList = ({ children }) => (
  <div className="scrollableList">
    {children.map((child) => (
      <div className='listItem'>{child}</div>
    ))}
  </div>
);

export default ScrollableList;
