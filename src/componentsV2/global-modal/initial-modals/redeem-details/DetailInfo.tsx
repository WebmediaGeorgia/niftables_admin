// @ts-nocheck
import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'

import { useTypedSelector } from '@hooks/useNewTypedSelector'

import ActivatedBadge from '@commonV2/badges/ActivatedBadge'
import Title from '../../common/details/Title'
import User from '../../common/details/User'
import Collection from '../../common/details/Collection'
import RarityScoreCol from '../../common/details/RarityScoreCol'
import RarityRankCol from '../../common/details/RarityRankCol'
import BadgesList from '../../common/details/BadgesList'
import ActionButtons from './ActionButtons'

export default function DetailInfo () {
	const nft = useTypedSelector(state => get(state, 'modal.data', {}))
	const utilityStatus = useTypedSelector(state => get(state, 'modal.options.token.utilityStatus'))
  return (
    <StyledWrapper>
      <div>
        <Title item={nft} />
        <div className='g-d-flex g-justify-between g-align-center g-mt-5'>
          <User
            label='Owner'
            item={nft}
          />
          <ActivatedBadge utilityStatus={utilityStatus} />
        </div>
        <Collection
          nft={nft}
        />
        <div className='g-h-separator g-mt-15' />
        <BadgesList
          className='g-mt-15'
          nft={nft}
        />
        <div className='g-d-flex g-mt-20'>
          <RarityScoreCol nft={nft} />
          <RarityRankCol
            className='g-ml-30'
            nft={nft}
          />
        </div>
      </div>
      <ActionButtons />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
	flex-grow: 1;
	padding-left: 30px;
	width: 100%;
	@media only screen and (max-width: 768px) {
		padding: 0;
		margin-top: 10px;
	}
`
