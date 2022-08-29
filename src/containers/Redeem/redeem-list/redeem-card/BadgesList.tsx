import React from 'react'
import get from 'lodash/get'

import styles from './RedeemCard.module.scss'

import Badge from '@shared/Badge'

export default function BadgesList ({ token }) {
  const rarity = get(token, 'nft.rarity', '')
  const utilityStatus = get(token, 'utilityStatus', '')
  return (
    <div className={styles['badge-list']}>
      {rarity && (
        <Badge
          className={styles.sBadge}
          rounded
          uppercase
          color='secondary'
          size='m'
        >
          {rarity}
        </Badge>
      )}
      {utilityStatus && (
        <Badge
          className={styles.sBadge}
          rounded
          uppercase
          color='secondary'
          size='m'
        >
          {utilityStatus}
        </Badge>
      )}
    </div>
  )
}
