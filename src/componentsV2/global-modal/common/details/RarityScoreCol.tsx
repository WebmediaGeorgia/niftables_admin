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
  & > .label {
    font-size: 12px;
    color: ${({ theme }) => theme.text.primary};
    opacity: 0.5;
  }
  & .value {
    display: flex;
    align-items: center;
    height: 45px;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.text.primary};
    .label {
      font-size: 14px;
      font-weight: 600;
    }
    .icon {
      width: 14px;
      height: 13px;
    }
  }
`
