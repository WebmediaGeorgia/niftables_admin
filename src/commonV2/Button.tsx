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
    'link': css`
      color: #FF66C4;
      background-size: cover;
      background: transparent;
      cursor: pointer;
      padding: 0;
      height: 18px;
    `,
    'primary': css`
      color: white;
      background-size: cover;
      background: #FF66C4;
      cursor: pointer;
      svg {
        path {
          fill: white;
        }
      }

      :hover:not([disabled]) {
        background: #FFFFFF;
        color: #FF66C4;

        svg {
          path {
            fill: #FF66C4;
          }
        }
      }
    `,
    'transparent': css`
      color: white;
      background: transparent;
      border: 1px solid #FF66C4;
      cursor: pointer;
      svg {
        path {
          fill: white;
        }
      }

      :hover:not([disabled]) {
        background: transparent;
        color: #FF66C4;
        border: 1px solid #FF66C4;
        svg {
          path {
            fill: #FF66C4;
          }
        }
      }
    `
  }
  return { scheme: config[colorScheme] }
})`
  width: 170px;
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  height: 54px;
  display: block;
  min-width: 164px;
  padding: 0 15px;
  border: none;
  border-radius: 8px;
  box-shadow: none;
  transition: all 0.2s;

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
