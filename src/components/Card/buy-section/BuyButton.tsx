import React, { FC } from 'react';
import { useRouter } from 'next/router';

import OpenSeaIcon from 'public/other/open-sea-icon.svg';

import styles from './BuySection.module.scss';

export interface IBuyButtonProps {
  availableSupply: boolean;
  openSeaLink?: string;
  distribution?: string;
}

const BuyButton: FC<IBuyButtonProps> = ({
  availableSupply,
  openSeaLink,
  distribution,
}) => {
  const router = useRouter();

  const navigateToPacks = React.useCallback((e) => {
    if (distribution !== 'PACKS') return
    e.stopPropagation()
    router.push('/packs')
  }, [distribution, router])

  if (openSeaLink && router.pathname === '/collections/[id]') {
    return (
      <a
        className={styles.buy}
        href={openSeaLink}
        onClick={(e) => e.stopPropagation()}
        rel='noopener noreferrer'
        target='_blank'
      >
        <OpenSeaIcon className={styles.icon} />
        Buy now
      </a>
    );
  }

  if (!availableSupply) {
    return <div className={styles['sold-out']}>Sold Out</div>;
  }

  return (
    <div
      className={styles.buy}
      onClick={navigateToPacks}
    >
      {distribution === 'PACKS' ? 'Buy in Packs' : 'Buy now'}
    </div>
  );
};

export default BuyButton;
