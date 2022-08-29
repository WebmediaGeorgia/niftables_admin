import React, { FC } from 'react';

import styles from './BuySection.module.scss';
import Price from './Price';
import BuyButton from './BuyButton';
import cn from 'classnames';

export interface IBuySectionProps {
  price: string;
  availableSupply: boolean;
  openSeaLink?: string;
  distribution?: string;
  showPrice?: boolean;
}

const BuySection: FC<IBuySectionProps> = ({
  price,
  availableSupply,
  openSeaLink,
  distribution,
  showPrice = true,
}) => {
  const footerClasses = cn(styles.footer, {
    [styles['hide-price']]: !showPrice,
  });
  return (
    <div className={footerClasses}>
      <Price price={price} availableSupply={availableSupply} />
      <BuyButton
        availableSupply={availableSupply}
        openSeaLink={openSeaLink}
        distribution={distribution}
      />
    </div>
  );
};

export default BuySection;
