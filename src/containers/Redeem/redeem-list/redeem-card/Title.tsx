import React from 'react'
import get from 'lodash/get'

import styles from './RedeemCard.module.scss'

export default function Title ({ token }) {
  const title = get(token, 'nft.name', '')
  return (
    <div className={styles.infoTitle}>
      {title}
    </div>
  )
}
