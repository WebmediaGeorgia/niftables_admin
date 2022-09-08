// @ts-nocheck
import React from 'react'
import get from 'lodash/get'

import { useTypedSelector } from '@hooks/useNewTypedSelector'

import ActivatedBadge from '@commonV2/badges/ActivatedBadge'
import Title from '../../common/details/Title'
import User from '../../common/details/User'
import Collection from '../../common/details/Collection'
import RarityScoreCol from '../../common/details/RarityScoreCol'
import RarityRankCol from '../../common/details/RarityRankCol'
import BadgesList from '../../common/details/BadgesList'

export default function DetailInfo () {
	const nft = useTypedSelector(state => get(state, 'modal.data', {}))
	const utilityStatus = useTypedSelector(state => get(state, 'modal.options.token.utilityStatus'))
  return (
    <div>
      <Title item={nft} />
      <div className='g-d-flex g-justify-between g-align-center g-mt-10'>
        <User
          label='Owner'
          item={nft}
        />
      </div>
      <Collection
        className='g-mt-10'
        nft={nft}
      />
      <div className='g-h-separator g-mt-15' />
      <BadgesList
        className='g-mt-20'
        nft={nft}
      />
      <div className='g-d-flex g-mt-25'>
        <RarityScoreCol nft={nft} />
        <RarityRankCol
          className='g-ml-30'
          nft={nft}
        />
      </div>
    </div>
  )
}
