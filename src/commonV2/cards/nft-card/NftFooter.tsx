// @ts-nocheck
import React from 'react'
import styled from 'styled-components'

import parsePrice from '@utils/entities/parsePrice'

export default React.memo(function NftFooter ({ price }) {
  return (
    <StyledWrapper className='footer'>
      <div className='price'>
        ${parsePrice({ price })}
      </div>
      <div className='buy'>
        Buy now
      </div>
    </StyledWrapper>
  )
})

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 9px 28px;
  .price {
    font-size: 14px;
    font-weight: 600;
    line-height: 22px;
    color: ${({ theme }) => theme.text.primary};
  }
  .buy {
    font-size: 12px;
    font-weight: 600;
    line-height: 22px;
    color: ${({ theme }) => theme.text.secondary};
  }
`
