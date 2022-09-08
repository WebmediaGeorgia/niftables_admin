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
  max-width: 375px;
  margin: 20px 0 0 0;
  text-align: center;
  background: rgba(7, 3, 31, 0.3);
  border-radius: 100px;
  padding: 10px 20px;
`
