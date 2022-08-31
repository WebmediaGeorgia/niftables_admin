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
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  & .label {
    font-weight: 300;
    font-size: 15px;
    line-height: 22px;
    color: white;
    opacity: 0.5;
  }
  & .value {
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: white;
  }
`
