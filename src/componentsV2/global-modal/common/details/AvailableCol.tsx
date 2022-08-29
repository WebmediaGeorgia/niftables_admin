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
