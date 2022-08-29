import React from 'react'
import cn from 'classnames'
import get from 'lodash/get'

import RarityScore from 'public/other/rarityScore_small.svg'

import styles from './RedeemCard.module.scss'

export default function Score ({ token }) {
  const rarityRank = get(token, 'nft.rarityRank', '')
  const rarityScore = get(token, 'nft.rarityScore', '')
  return (
    <div className={styles.details__meta}>
      <div className={styles.details__row}>
        <div className={cn(styles.details__col, styles.details__first)}>
          <div className={styles.details__text}>
            #{rarityRank}
          </div>
        </div>
        <div className={cn(styles.details__col, styles.details__last)}>
          <div className={styles.details__text}>
            <RarityScore
              width='10'
              height='9'
              className={styles['icon-rarityScore']}
            />
            {rarityScore}
          </div>
        </div>
      </div>
    </div>
  )
}
