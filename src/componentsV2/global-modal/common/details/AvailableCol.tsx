// @ts-nocheck
import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'

export default function AvailableCol ({ className = '', nft }) {
  const availableSupply = get(nft, 'availableSupply') || 0
  const supply = get(nft, 'supply') || 0
  return (
    <StyledWrapper className={className}>
      <div className='label'>
        Available:
      </div>
      <div className='value'>
        {availableSupply}/{supply}
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
