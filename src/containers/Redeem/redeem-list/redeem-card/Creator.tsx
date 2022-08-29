import React from 'react'
import get from 'lodash/get'

import ValidUser from 'public/field-icons/valid-user.svg'
import PersonSmall from '/public/field-icons/person-small.svg'

import styles from './RedeemCard.module.scss'

export default function Creator({ token }) {
  const creatorName = get(token, 'nft.collection.whitelabel.name', '')
  return (
    <div className={styles['owner-name']}>
      <div className={styles['owner-title']}>
        Creator:
      </div>
      <div className={styles.img}>
        <PersonSmall
          className={styles['icon-person']}
          width='18px'
          height='18px'
        />
      </div>
      <b>{creatorName}</b>
      <ValidUser className={styles['icon-validUser']} />
    </div>
  )
}
