import React from 'react';
import './Widget.css';

const Widget = ({ title, children }) => (
  <>
    <div className="widget">
      <div className="title">{title}</div>
      {children}
    </div>
  </>
);

export default Widget;
