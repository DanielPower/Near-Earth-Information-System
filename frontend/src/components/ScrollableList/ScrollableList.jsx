import React from 'react';
import styles from './ScrollableList.module.css';

const ScrollableList = ({ children }) => (
  <div className={styles.scrollableList}>
    {children.map((child) => (
      <div className={styles.listItem}>{child}</div>
    ))}
  </div>
);

export default ScrollableList;
