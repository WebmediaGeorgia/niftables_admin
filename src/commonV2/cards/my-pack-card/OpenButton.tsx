import React from 'react'
import styled from 'styled-components'

export default function OpenButton () {
  return (
    <StyledWrapper>
      Open now
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${({ theme }) => theme.text.secondary};
  text-align: center;
  text-transform: uppercase;
`
