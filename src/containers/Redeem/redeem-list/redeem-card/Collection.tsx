import React from 'react'
import get from 'lodash/get'

import styles from './RedeemCard.module.scss'

export default function Collection ({ token }) {
  const collectionName = get(token, 'nft.collection.name', '')

  if (!collectionName) return null

  return (
    <div className={styles['owner-name']}>
      <div className={styles['owner-title']}>Collection: </div>
      <b>{collectionName}</b>
    </div>
  )
}
