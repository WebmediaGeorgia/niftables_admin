import React from 'react'
import get from 'lodash/get'

import CommonBadge from '@commonV2/badges/CommonBadge'

export default function BadgesList ({ token }) {
  const rarity = get(token, 'nft.rarity', '')
  const utilityStatus = get(token, 'utilityStatus', '')
  return (
    <div className='g-d-flex g-wrap'>
      {rarity && (
        <CommonBadge
          label={rarity}
        />
      )}
      {utilityStatus && (
        <CommonBadge
          className='g-ml-10'
          label={utilityStatus}
        />
      )}
    </div>
  )
}
