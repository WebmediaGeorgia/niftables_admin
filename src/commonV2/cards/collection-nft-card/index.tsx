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
import NftPrice from '../common/nfts/NftPrice'
import ActionButton from './ActionButton'
import HoverableActionButton from "@commonV2/cards/common/nfts/HoverableActionButton";
import OpenSeaIcon from "../../../../public/other/open-sea-icon.svg";
import styled from "styled-components";

export default React.memo(function CollectionNftCard ({ className = '', nft, clickHandler }) {
  const price = get(nft, 'price')
  const rarityRank = get(nft, 'rarityRank')
  const rarityScore = get(nft, 'rarityScore')
  const name = get(nft, 'name')
  const rarity = get(nft, 'rarity')
  const utilityType = get(nft, 'utilityType')
  const availableSupply = get(nft, 'availableSupply') || 0
  const supply = get(nft, 'supply') || 0
  const openSeaLink = get(nft, 'openSeaLink')
  const distribution = get(nft, 'collection.distribution')
  return (
    <NftWrapper
      className={className}
      onClick={clickHandler}
    >
      <div className='body'>
        <div className='header'>
          <RarityRank rarityRank={rarityRank} />
          <RarityScore rarityScore={rarityScore} />
        </div>
        <MediaWrapper className="media" nft={nft} />
        <NftTitle name={name} />
        <NftBadges
          rarity={rarity}
          utilityType={utilityType}
        />
        <CollectionSupply>
          <NftSupply
            availableSupply={availableSupply}
            supply={supply}
          />
          <OpenSeaIcon className='icon' />
        </CollectionSupply>
      </div>
      <Separator />
      <div className='footer footer__without-spacing'>
        <NftPrice price={price} />
        <HoverableActionButton>
          <ActionButton
            availableSupply={availableSupply}
            openSeaLink={openSeaLink}
            distribution={distribution}
          />
        </HoverableActionButton>
      </div>
    </NftWrapper>
  )
})

const CollectionSupply = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  .icon {
    & :nth-child(1) {
      fill: #0D4B9E !important;
    }
    & :nth-child(2) {
      fill: #fff !important;
    }
    & :nth-child(3) {
      fill: #fff !important;
    }
  }
`;
