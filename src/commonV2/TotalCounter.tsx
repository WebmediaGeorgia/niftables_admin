// @ts-nocheck
import React from 'react'
import styled from 'styled-components'

export default React.memo(function TotalCounter ({
  className = '', text = 'NFTs: ', counter = ''
}) {
  if (!counter) return null
  return (
    <StyledWrapper className={className}>
      {text} <b>{counter}</b>
    </StyledWrapper>
  )
})

const StyledWrapper = styled.div`
  font-weight: 300;
  font-size: 15px;
  line-height: 22px;
  color: ${({ theme }) => theme.text.white};
  white-space: nowrap;
`
