import React from 'react'
import cn from 'classnames'
import get from 'lodash/get'

import CommonBadge from '@commonV2/badges/CommonBadge'

export default function BadgesList ({ className = '', nft }) {
  const rarity = get(nft, 'rarity')
  const utilityType = get(nft, 'utilityType')
  const mergeable = get(nft, 'mergeable')
  return (
    <div className={cn('g-d-flex', className)}>
      {rarity && (
        <CommonBadge
          label={rarity}
        />
      )}
      {utilityType && (
        <CommonBadge
          className='g-ml-10'
          label={utilityType}
        />
      )}
      {mergeable && (
        <CommonBadge
          className='g-ml-10'
          label='mergeable'
        />
      )}
    </div>
  )
}
