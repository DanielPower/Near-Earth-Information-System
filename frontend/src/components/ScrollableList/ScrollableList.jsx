import React from 'react';
import styles from './ScrollableList.module.css';

const ScrollableList = ({ items }) => (
  <div className={styles.scrollableList}>
    {items.map((item) => (
      <div key={item.key} className={styles.listItem}>{item.component}</div>
    ))}
  </div>
);

export default ScrollableList;
