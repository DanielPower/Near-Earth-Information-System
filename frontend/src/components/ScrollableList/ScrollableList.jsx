import React from 'react';
import './ScrollableList.css';

const ScrollableList = ({ children }) => (
  <div className="scrollableList">
    {children.map((child, index) => (
      <div className={index % 2 ? 'odd' : 'even'}>{child}</div>
    ))}
  </div>
);

export default ScrollableList;
