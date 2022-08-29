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
      color: ${theme.text.primary};
      background: url(${bg.src}) 100% center no-repeat;
      background-size: cover;
    `,
    'transparent': css`
      color: ${theme.text.primary};
      background: transparent;
      border: solid 2px #bdad9e;
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
  border-radius: 50px;
  box-shadow: none;
  transition: all 0.2s;
  :hover:not([disabled]) {
    box-shadow: inset 0px 4px 16px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
  :active:not([disabled]) {
    box-shadow: inset 0px 4px 16px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
  :disabled {
    opacity: 0.5;
    filter: saturate(0);
  }
  ${({ scheme }) => scheme};
`
