import React from 'react'
import styled from 'styled-components'

export default function Hint () {
  return (
    <StyledWrapper>
      This price is dynamic and can be changed on the moment of purchase
      according to the market prices
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 30px 0 0 0;
  text-align: center;
`
