import React from 'react'
import get from 'lodash/get'

import styles from './RedeemCard.module.scss'

export default function UtilityInformation ({ token }) {
  const utilityExperience = get(token, 'nft.utilityExperience', '')

  if (!utilityExperience) return null

  return (
    <div className={styles['experience']}>
      <div className={styles['experience-title']}>
        Utility information
      </div>
      <div className={styles['experience-text']}>
        {utilityExperience}
      </div>
    </div>
  )
}
