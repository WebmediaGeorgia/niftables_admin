// @ts-nocheck
import React from 'react'
import styled from 'styled-components'

import parsePrice from '@utils/entities/parsePrice'

export default React.memo(function NftPrice ({ price }) {
  return (
    <StyledWrapper>
      {price ? `$${parsePrice({ price })}` : '?'}
    </StyledWrapper>
  )
})

const StyledWrapper = styled.div`
  margin-left: 28px;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: ${({ theme }) => theme.text.primary};
`
