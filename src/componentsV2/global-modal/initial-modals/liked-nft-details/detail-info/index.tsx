// @ts-nocheck
import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'

import { useTypedSelector } from '@hooks/useNewTypedSelector'

import WarningHint from '@commonV2/WarningHint'
import Title from '../../../common/details/Title'
import User from '../../../common/details/User'
import Collection from '../../../common/details/Collection'
import BadgesList from '../../../common/details/BadgesList'
import PriceCol from '../../../common/details/PriceCol'
import AvailableCol from '../../../common/details/AvailableCol'
import RarityScoreCol from '../../../common/details/RarityScoreCol'
import RarityRankCol from '../../../common/details/RarityRankCol'
import ButtonsSection from '../../../common/details/buttons-section'
import LikeHandler from './LikeHandler'

export default function DetailInfo () {
	const nft = useTypedSelector(state => get(state, 'modal.data', {}))
	const collectionId = useTypedSelector(state => get(state, 'modal.data.collection.id'))
  return (
    <StyledWrapper>
      <div>
        <Title item={nft} />
        <div className='g-d-flex g-justify-between g-align-center g-mt-5'>
          <User
            label='Owner'
            item={nft}
          />
          <LikeHandler />
        </div>
        <Collection
          nft={nft}
        />
        <div className='g-h-separator g-mt-15' />
        <BadgesList
          className='g-mt-15'
          nft={nft}
        />
        <div className='params g-mt-15'>
          <PriceCol item={nft} />
          <AvailableCol nft={nft} />
          <RarityScoreCol nft={nft} />
          <RarityRankCol nft={nft} />
        </div>
      </div>
      <ButtonsSection nft={nft} />
      {!nft.openSeaLink && (
        <WarningHint collectionId={collectionId} />
      )}
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
  .params {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
  }
`
