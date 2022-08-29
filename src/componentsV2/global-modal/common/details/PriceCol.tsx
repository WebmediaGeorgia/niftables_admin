// @ts-nocheck
import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'

import parsePrice from '@utils/entities/parsePrice'

export default function PriceCol ({ className = '', item }) {
  const price = get(item, 'price')
  return (
    <StyledWrapper className={className}>
      <div className='label'>
        Price:
      </div>
      <div className='value'>
        ${parsePrice({ price })}
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
    font-size: 24px;
    font-weight: 600;
    color: ${({ theme }) => theme.text.primary};
  }
`
