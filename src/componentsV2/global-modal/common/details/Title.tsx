import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'

export default function Title ({ item }) {
  const name = get(item, 'name', '')
  return (
    <StyledWrapper>
      {name}
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  font-weight: 700;
  font-size: 26px;
  line-height: 36px;
`
