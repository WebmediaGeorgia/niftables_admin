import React from 'react'
import styled, { css } from 'styled-components'

import bg from 'public/assets/img/jungle/button_large_bg.webp'

export default function Button ({
  className = '', colorScheme = 'primary', disabled, clickHandler, children
}) {
  return (
    <StyledWrapper
      className={className}
      colorScheme={colorScheme}
      disabled={disabled}
      onClick={clickHandler}
    >
      {children}
    </StyledWrapper>
  )
}

const StyledWrapper = styled.button.attrs(({ colorScheme, theme }) => {
  const config = {
    'primary': css`
      color: white;
      background-size: cover;
      background: #FF66C4;
    `,
    'transparent': css`
      color: white;
      background: transparent;
      border: 1px solid #FF66C4;
    `
  }
  return { scheme: config[colorScheme] }
})`
  display: block;
  min-width: 164px;
  padding: 0 15px;
  font-size: 20px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
  border: none;
  border-radius: 8px;
  box-shadow: none;
  transition: all 0.2s;

  :hover:not([disabled]) {
    background: #FFFFFF;
    color: #FF66C4;
    svg { fill: #FF66C4; }
  }
  :active:not([disabled]) {
    background: #FFFFFF;
    color: #FF66C4;
  }
  :disabled {
    opacity: 0.5;
    filter: saturate(0);
  }
  ${({ scheme }) => scheme};
`
