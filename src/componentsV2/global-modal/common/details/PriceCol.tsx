// @ts-nocheck
import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'

import parsePrice from '@utils/entities/parsePrice'

export default function PriceCol ({ className = '', item }) {
  const price = get(item, 'price')
  if (!price) return null
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
    font-weight: 300;
    font-size: 15px;
    line-height: 22px;
    color: white;
    opacity: 0.5;
  }
  & .value {
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 26px;
    line-height: 36px;
    color: white;
  }
`
