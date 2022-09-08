// @ts-nocheck
import React from 'react'
import styled from 'styled-components'

export default React.memo(function NftSupply ({ availableSupply, supply }) {
  if (!availableSupply && !supply) return <StyledWrapper />
  return (
    <StyledWrapper>
      Available: <b>{availableSupply}/{supply}</b>
    </StyledWrapper>
  )
})

const StyledWrapper = styled.div`
  min-height: 14px;
  margin-top: auto;
  padding-top: 10px;
  font-weight: 300;
  font-size: 15px;
  line-height: 22px;
  color: #0d4b9e;
  opacity: 0.5;
`
