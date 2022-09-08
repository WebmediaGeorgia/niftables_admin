// @ts-nocheck
import React from 'react'
import get from 'lodash/get'

import RarityRank from '@commonV2/RarityRank'
import RarityScore from '@commonV2/RarityScore'
import NftWrapper from '../common/nfts/NftWrapper'
import Separator from '../common/Separator'
import MediaWrapper from './media-wrapper'
import NftTitle from '../common/nfts/NftTitle'
import NftBadges from '../common/nfts/NftBadges'
import NftSupply from '../common/nfts/NftSupply'

export default React.memo(function MyNftCard ({ className = '', token, clickHandler }) {
  const rarityRank = get(token, 'nft.rarityRank')
  const rarityScore = get(token, 'nft.rarityScore')
  const name = get(token, 'nft.name')
  const rarity = get(token, 'nft.rarity')
  const utilityType = get(token, 'nft.utilityType')
  return (
    <NftWrapper
      className={className}
      onClick={clickHandler}
    >
      <div className='body'>
        <div className='header' />
        <MediaWrapper nft={token.nft} />
        <NftTitle name={name} />
        <NftBadges
          rarity={rarity}
          utilityType={utilityType}
        />
        <NftSupply />
      </div>
      <Separator />
      <div className='footer'>
        <RarityRank rarityRank={rarityRank} />
        <RarityScore rarityScore={rarityScore} />
      </div>
    </NftWrapper>
  )
})
