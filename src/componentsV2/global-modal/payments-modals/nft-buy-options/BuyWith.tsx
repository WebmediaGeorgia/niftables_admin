import React from 'react'
import styled from 'styled-components'

export default function BuyWith () {
  return (
    <StyledWrapper>
      Buy with
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 45px;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  @media only screen and (max-width: 480px) {
    margin-top: 20px;
  }
  ::before,
  ::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid ${({ theme }) => theme.text.primary};
  }
  ::before {
    margin-right: 25px;
  }
  ::after {
    margin-left: 25px;
  }
`
