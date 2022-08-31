// @ts-nocheck
import React from 'react'
import styled from 'styled-components'

export default React.memo(function Separator ({ className = '' }) {
  return <StyledWrapper className={className} />
})

const StyledWrapper = styled.hr`
  width: 100%;
  height: 1px;
  margin: 0;
  border: none;
  background: #E3ECF8;
`
