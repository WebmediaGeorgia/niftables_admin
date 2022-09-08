// @ts-nocheck
import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'

import RarityRank from '@commonV2/RarityRank'
import RarityScore from '@commonV2/RarityScore'

export default function Score ({ token }) {
  const rarityRank = get(token, 'nft.rarityRank', '')
  const rarityScore = get(token, 'nft.rarityScore', '')
  return (
    <StyledWrapper>
      <RarityRank
        className='rank'
        rarityRank={rarityRank}
      />
      <RarityScore
        className='score'
        rarityScore={rarityScore}
      />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  gap: 30px;
  .score {
    .icon {
      width: 15px;
      height: 16px;
    }
    .label {
      font-size: 14px;
    }
  }
`
