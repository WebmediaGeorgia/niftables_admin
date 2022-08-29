import Button from '@components/shared/Button';
import React, { FC } from 'react';
import styles from './ChangeEmail.module.scss';
import btnStyles from '@components/shared/Button/Button.module.scss';
import classNames from 'classnames';

export interface ICardHeader {
  handleCloseSection: () => void;
}

export const CardHeader: FC<ICardHeader> = ({ handleCloseSection }) => (
  <div className={styles.cardHeader}>
    <div className={styles.cardTitle}>Email</div>
    <div className={styles.btn_wrapper}>
      <Button
        className={classNames('mt-0', btnStyles['btn-cancel'])}
        onClick={handleCloseSection}
        size='s'
        color={'blue'}
        fillStyle
      >
        Cancel
      </Button>
    </div>
  </div>
);
