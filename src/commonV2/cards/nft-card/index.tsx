// @ts-nocheck
import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'

import Separator from '../common/Separator'
import NftHeader from './NftHeader'
import MediaWrapper from './media-wrapper'
import NftBadges from './NftBadges'
import NftFooter from './NftFooter'

export default React.memo(function NftCard ({ className = '', nft, clickHandler }) {
  const price = get(nft, 'price')
  const rarityRank = get(nft, 'rarityRank')
  const rarityScore = get(nft, 'rarityScore')
  const name = get(nft, 'name')
  const rarity = get(nft, 'rarity')
  const utilityType = get(nft, 'utilityType')
  const availableSupply = get(nft, 'availableSupply') || 0
  const supply = get(nft, 'supply') || 0
  return (
    <StyledWrapper
      className={className}
      onClick={clickHandler}
    >
      <div className='body'>
        <NftHeader
          rarityRank={rarityRank}
          rarityScore={rarityScore}
        />
        <MediaWrapper nft={nft} />
        <div className='title'>
          {name}
        </div>
        <NftBadges
          rarity={rarity}
          utilityType={utilityType}
        />
        <div className='supply'>
          Available: <b>{availableSupply}/{supply}</b>
        </div>
      </div>
      <Separator />
      <NftFooter price={price} />
    </StyledWrapper>
  )
})

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  background: white;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.16);
  transition: all 0.2s;
  cursor: pointer;
  .body {
    flex-grow: 1;
    padding: 0 28px 12px;
    .title {
      color: black;
      margin-top: 13px;
      font-weight: 400;
      font-size: 15px;
      line-height: 22px;
    }
    .supply {
      margin-top: 10px;

      font-weight: 300;
      font-size: 15px;
      line-height: 22px;
      color: #0D4B9E;
      opacity: 0.5;
    }
  }
`
