// @ts-nocheck
import React from 'react'
import styled from 'styled-components'

export default React.memo(function NftTitle ({ className, name }) {
  return (
    <StyledWrapper className={className}>
      {name}
    </StyledWrapper>
  )
})

const StyledWrapper = styled.div`
  margin-top: 15px;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: #000;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`
