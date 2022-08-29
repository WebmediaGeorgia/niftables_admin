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
  font-size: 22px;
  font-weight: 600;
  line-height: 35px;
`
