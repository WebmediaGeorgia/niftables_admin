import React from 'react';
import styles from './CardNftUtility.module.scss';

function CardNftUtility({ item }) {
  return (
    <div className={styles.card}>
      <div className={styles['card-wrapper']}>
        <div className={styles['card-header']}>
          <div className={styles['card-title']}>{item.name}</div>
        </div>
        <div className={styles['card-body']}>
          <div className={styles['card-desc']}>{item.desc}</div>
        </div>
      </div>
    </div>
  );
}

export default CardNftUtility;
