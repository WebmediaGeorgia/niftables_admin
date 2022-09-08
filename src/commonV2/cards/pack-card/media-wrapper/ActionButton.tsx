import React from 'react'
import styled from 'styled-components'

import Button from '@commonV2/Button'

export default function ActionButton ({ availableSupply, clickHandler }) {
  return (
    <StyledButton
      className='action-button'
      clickHandler={clickHandler}
    >
      {availableSupply === 0 ? 'See more' : 'Buy Now'}
    </StyledButton>
  )
}

const StyledButton = styled(Button)`
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translate(-50%, 0);
  z-index: 2;
`
