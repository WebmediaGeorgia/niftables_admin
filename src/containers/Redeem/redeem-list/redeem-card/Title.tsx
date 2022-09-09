import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'

export default function Title ({ token }) {
  const title = get(token, 'nft.name', '')
  return (
    <StyledWrapper>
      {title}
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  flex: auto;
  margin: 5px 0 8px;
  padding-right: 10px;
  font-weight: 700;
  font-size: 26px;
  line-height: 36px;
  color: #000;
`
