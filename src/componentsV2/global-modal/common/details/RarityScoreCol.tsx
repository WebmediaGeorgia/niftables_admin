import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'

import RarityScore from '@commonV2/RarityScore'

export default function RarityScoreCol ({ className = '', nft }) {
  const rarityScore = get(nft, 'rarityScore')

  if (!rarityScore) return null

  return (
    <StyledWrapper className={className}>
      <div className='label'>
        Rarity Score:
      </div>
      <RarityScore
        className='value'
        rarityScore={nft.rarityScore}
      />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  & > .label {
    font-weight: 300;
    font-size: 15px;
    line-height: 22px;
    color: white;
    opacity: 0.5;
  }
  & .value {
    display: flex;
    align-items: center;

    .label {
      font-weight: 400;
      font-size: 15px;
      line-height: 22px;
      color: white;
    }
    .icon {
      width: 14px;
      height: 13px;

      > path {
        fill: white;
      }
    }
  }
`
