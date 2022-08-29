import React, { ReactNode } from 'react';
import styles from './NFTBurnBadge.module.scss';
import Warn from 'public/other/warn.svg';
import classNames from 'classnames';

interface INFTBurnBadge {
  children?: ReactNode;
  className?: string;
}

const NFTBurnBadge = ({ children, className }: INFTBurnBadge) => {
  return (
    <span className={classNames(styles.burnBadge, className)}>
      {children} <Warn className={styles.icon} />
      You can use this NFT one time only! Your NFT will be burned upon Redeem
      success.
    </span>
  );
};

export default NFTBurnBadge;
