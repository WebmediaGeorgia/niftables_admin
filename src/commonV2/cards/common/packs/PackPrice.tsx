// @ts-nocheck
import React from 'react'
import styled from 'styled-components'

import parsePrice from '@utils/entities/parsePrice'

export default React.memo(function PackPrice ({ availableSupply, price }) {
  const parsedPrice = React.useMemo(() => {
    if (!availableSupply) return 'Sold Out'
    return `$${parsePrice({ price })}`
  }, [availableSupply, price])
  return (
    <StyledWrapper className='g-mt-5'>
      {parsedPrice}
    </StyledWrapper>
  )
})

const StyledWrapper = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  color: ${({ theme }) => theme.text.primary};
  text-transform: uppercase;
  text-align: center;
`
