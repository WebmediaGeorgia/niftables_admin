// @ts-nocheck
import React from 'react'
import styled from 'styled-components'

import parsePrice from '@utils/entities/parsePrice'

export default React.memo(function NftPrice ({ price }) {
  return (
    <StyledWrapper>
      ${parsePrice({ price })}
    </StyledWrapper>
  )
})

const StyledWrapper = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${({ theme }) => theme.text.primary};
`
