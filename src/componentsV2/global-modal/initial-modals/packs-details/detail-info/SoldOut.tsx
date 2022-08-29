import React from 'react'
import get from 'lodash/get'

import LegendBlock from '@commonV2/LegendBlock'

export default function SoldOut ({ pack }) {
  const availableSupply = get(pack, 'availableSupply')
  const packsNft = get(pack, 'packsNft')
  if (availableSupply === 0 && !packsNft) {
    return (
      <LegendBlock label='Sold out'>
        <div>Lorem ipsum dolor sit amet, consectetur.</div>
      </LegendBlock>
    )
  }
  return (
    <hr className='g-h-separator g-mt-15' />
  )
}
