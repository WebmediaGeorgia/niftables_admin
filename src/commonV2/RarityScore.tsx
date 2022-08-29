import React from 'react'
import styled from 'styled-components'

import RarityScoreIcon from 'public/utility/rarity-score-icon.svg'

export default function RarityScore ({ className = '', rarityScore }) {
  if (!rarityScore) return <div />
  return (
    <StyledWrapper className={className}>
      <RarityScoreIcon className='icon' />
      <div className='label'>
        {rarityScore}
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  & .icon {
    margin-right: 4px;
    path {
      fill: ${({ theme }) => theme.text.primary};
    }
  }
  & .label {
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    color: ${({ theme }) => theme.text.primary};
  }
`
