import React from 'react';
import styles from './Widget.module.css';

const Widget = ({ title, subTitle, children }) => (
  <>
    <div className={styles.widget}>
      <div className={styles.title}>{title}</div>
      {title && <div className={styles.subTitle}>{subTitle}</div>}
      {children}
    </div>
  </>
);

export default Widget;
