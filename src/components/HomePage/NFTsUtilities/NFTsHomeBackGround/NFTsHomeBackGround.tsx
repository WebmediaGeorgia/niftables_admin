import React from 'react';
import styles from './NFTsHomeBackGround.module.scss';
import classNames from 'classnames';

const NFTsHomeBackGround = () => {
  return (
    <div className={classNames(styles.background, styles.wrapper)}>
      <div className={styles.container}>
        <div
          className={classNames(styles.background, styles['leaf-left'])}
        ></div>
        <div className={classNames(styles.background, styles.animal)}></div>

        <div className={classNames(styles.background, styles['leaf-8'])}></div>
        <div className={classNames(styles.background, styles['leaf-7'])}></div>
        <div className={classNames(styles.background, styles['leaf-6'])}></div>
        <div className={classNames(styles.background, styles['leaf-5'])}></div>
        <div className={classNames(styles.background, styles['leaf-4'])}></div>
        <div className={classNames(styles.background, styles['leaf-3'])}></div>
        <div
          className={classNames(styles.background, styles['leaf-left-bottom'])}
        ></div>
      </div>
    </div>
  );
};

export default NFTsHomeBackGround;
