// @ts-nocheck
import React from 'react'

import styles from './YouHave.module.scss'

import Button from '@components/shared/Button'

export default function YouHave ({
	total,
  description,
  buttonLabel,
  clickHandler,
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.column}>
        <div className={styles['total-wrapper']}>
          <div className={styles.text}>You have</div>
          <div className={styles.total}>{total}</div>
        </div>
        <div className={styles.text}>{description}</div>
      </div>
      <div className={styles.column}>
        <Button
          size={'s'}
          color={'blue'}
          className={styles.button}
          onClick={clickHandler}
        >
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
};
