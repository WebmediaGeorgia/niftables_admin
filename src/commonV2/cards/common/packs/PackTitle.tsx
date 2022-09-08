import React from 'react'
import styled from 'styled-components'

export default function PackTitle ({ name }) {
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
  color: #000;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`
