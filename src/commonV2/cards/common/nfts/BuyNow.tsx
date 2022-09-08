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
  font-size: 12px;
  font-weight: 600;
  line-height: 22px;
  color: ${({ theme }) => theme.text.secondary};
`
