import React, { FC } from 'react';

import styles from './BuySection.module.scss';
import { renderPrice } from '@utils/parse-utils';

export interface IPriceProps {
  price: string;
  availableSupply: boolean;
}

const Price: FC<IPriceProps> = ({ price, availableSupply }) => {
  const className = availableSupply ? styles.price : styles['sold-price'];
  return <div className={className}>${renderPrice(price)}</div>;
};

export default Price;
