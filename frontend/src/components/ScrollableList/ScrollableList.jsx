import React from 'react';
import styles from './ScrollableList.module.css';

const ScrollableList = ({ children }) => (
  <div className={styles.scrollableList}>
    {React.Children.map(children, (child) => (
      <div key={child.props} className={styles.listItem}>
        <child.type {...child.props} />
      </div>
    ))}
  </div>
);

export default ScrollableList;
