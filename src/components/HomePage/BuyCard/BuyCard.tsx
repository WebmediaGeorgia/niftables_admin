import { ExternalImage } from '@components/shared/ExternalImage';
import React from 'react';
import styles from './BuyCard.module.scss';

import classNames from 'classnames';
import { useTypedSelector } from '@hooks/useNewTypedSelector';
import NavButton from '@components/shared/NavButton';

const BuyCard = () => {
  const src = '/assets/img/jungle/golden-egg.webp';
  const name = 'Buy An Egg';
  const { userType, twoFactorAuthEnabled, twoFactorPassed } = useTypedSelector(
    (state) => state.auth
  );
  return (
    <div className={styles.card}>
      <div className={styles['card-bg']}>
        <div className={classNames(styles['card-hover-to-leaves'])}></div>
        <div className={classNames(styles['card-wrapper'])}>
          <div className={styles['card-media']}>
            <div className={styles.image}>
              <span
                className={classNames(styles.leaf, styles['leaf-left'])}
              ></span>
              <span
                className={classNames(styles.leaf, styles['leaf-right'])}
              ></span>
              <ExternalImage
                src={src}
                alt={name}
                responsive
                height='423'
                width='390'
              />
            </div>
          </div>
          <div className={styles['card-body']}>
            {userType === 'prospect' ||
            userType === 'visitor' ||
            (userType === 'authorized' &&
              twoFactorAuthEnabled &&
              !twoFactorPassed) ? (
              <NavButton
                className={styles.button}
                size='m'
                color='blue'
                fillStyle={true}
                fullWidth={false}
                to='/signin'
              >
                Sign In
              </NavButton>
            ) : (
              <NavButton
                className={styles.button}
                size='m'
                color='blue'
                fillStyle={true}
                fullWidth={false}
                to='/packs'
              >
                See All
              </NavButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyCard;
