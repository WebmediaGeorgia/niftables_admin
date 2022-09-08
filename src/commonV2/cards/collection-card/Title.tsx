import React from 'react'
import styled from 'styled-components'

export default function Title ({ name }) {
  return (
    <StyledWrapper title={name}>
      {name}
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  white-space: nowrap;
  color: #000;
  text-overflow: ellipsis;
  overflow: hidden;
`
