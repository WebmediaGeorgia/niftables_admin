import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'

export default function RarityRankCol ({ className = '', nft }) {
  const rarityRank = get(nft, 'rarityRank')

  if (!rarityRank) return null

  return (
    <StyledWrapper className={className}>
      <div className='label'>
        Rarity Rank:
      </div>
      <div className='value'>
        #{rarityRank}
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  & .label {
    font-size: 12px;
    color: ${({ theme }) => theme.text.primary};
    opacity: 0.5;
  }
  & .value {
    display: flex;
    align-items: center;
    height: 45px;
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.text.primary};
  }
`
