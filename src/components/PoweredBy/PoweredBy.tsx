import React from 'react';
import styles from './PoweredBy.module.scss';
import classNames from 'classnames';

interface IPoweredBy {
  className?: string;
}

const PoweredBy = ({ className }: IPoweredBy) => {
  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      href='https://niftables.com/'
      className={classNames(styles['poweredBy'], className)}
    >
      Powered by <span className={styles['poweredBy-logo']}>Niftables</span>
    </a>
  );
};

export default PoweredBy;
