import React, { FC } from 'react';
import styles from './CollectionCard.styles.module.scss';
import cn from 'classnames';
import { ExternalImage } from '@components/shared/ExternalImage';
import Badge from '@shared/Badge';
import classnames from "classnames";

export interface ICollectionCardProps {
  item: ICollectionCardItem;
  onClick: (collection: ICollectionCardItem) => void;
  isLarge?: boolean;
  className?: string;
  isOwned?: boolean;
  showLike?: boolean;
}

export interface ICollectionCardItem {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: any;
  name: string;
  symbol: string;
  description: string;
  imageUrl: string;
  dropDate: Date;
  generative: boolean;
  rarities: string[];
  redeemable?: boolean;
  redeemOptions?: any;
  distribution: string;
  auctionEndDate?: any;
  traits?: any;
  published: boolean;
  publishedAt: Date;
  smartContractAddress: string;
  status: string;
}

const distributionsConfig = {
  'AUCTION': 'Auction',
  'FIXED_PRICE': 'Buy now',
  'PACKS': 'Packs'
}

export const CollectionCard: FC<ICollectionCardProps> = ({
  item,
  onClick,
  isLarge,
  className,
}: ICollectionCardProps) => {
  const imageClasses = cn(styles.image, { [styles['image--large']]: isLarge });
  const noImage = '/assets/img/collection-placeholder.svg';
  const isImgSrc = item.imageUrl ? item.imageUrl : noImage;

  const parsedDistribution = React.useMemo(() => {
    const label = distributionsConfig[item.distribution]
    if (!label) {
      console.warn(`Distributions with type: ${item.distribution} not implememnted`)
      return ''
    }
    return label
  }, [item])

  return (
    <div
      className={cn(
        styles.wrapper,
        className,
        isLarge && [styles['wrapper--large']]
      )}
    >
      <div className={styles.card} onClick={() => onClick(item)}>
        <div className={styles.body}>
          <div className={styles.media}>
            <ExternalImage
              className={imageClasses}
              src={isImgSrc}
              alt={item.description}
              objectFit='contain'
              objectPosition='top center'
            />
          </div>
          <div className={styles.content}>
            <div className={styles.title}>{item.name}</div>
            <div className={styles.distribution}>
              Distribution type:{' '}
              <span className={styles['distribution-value']}>
                {parsedDistribution}
              </span>
            </div>
            <div className={styles.badges}>
              {item.status && (
                <Badge
                  uppercase
                  rounded
                  color='secondary'
                  size={isLarge ? 'l' : 's'}
                  className={classnames(styles.sBadge, {
                    [styles.availableBadge]: item.status === "AVAILABLE",
                    [styles.soldBadge]: item.status === "SOLD"
                  })}
                >
                  {item.status}
                </Badge>
              )}
              {item.generative && (
                <Badge
                  uppercase
                  rounded
                  color='secondary'
                  size={isLarge ? 'l' : 's'}
                  className={styles.sBadge}
                >
                  Generative
                </Badge>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
