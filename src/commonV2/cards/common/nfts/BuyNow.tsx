import React from 'react'
import styled from 'styled-components'

export default React.memo(function BuyNow () {
  return (
    <StyledWrapper>
      Buy now
    </StyledWrapper>
  )
})

const StyledWrapper = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  text-align: right;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text.secondary};
`
