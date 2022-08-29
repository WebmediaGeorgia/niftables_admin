import React from 'react'
import styled, { css } from 'styled-components'

import NotLiked from 'public/other/favorite_clear.svg'

export default function NotAuthorizedLike ({ className, colorScheme }) {
  return (
    <StyledWrapper
      className={className}
      colorScheme={colorScheme}
    >
      <NotLiked
        className='icon'
        onClick={(e) => e.stopPropagation()}
      />
      <div className='tooltip-wrapper'>
        Please Sign in
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div.attrs(({ colorScheme }) => {
  const config = {
    'primary': css`
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.2);
      &:hover {
        background: rgba(0, 0, 0, 0.75);
        .tooltip-wrapper {
          display: block;
        }
      }
      &:active {
        background: rgba(0, 0, 0, 0.5);
      }
    `,
    'transparent': css`
      &:hover {
        .tooltip-wrapper {
          display: block;
        }
      }
    `
  }
  return { scheme: config[colorScheme] }
})`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  transition: all 0.2s;
  & .icon {
    path {
      fill: ${({ theme }) => theme.text.primary};
    }
  }
  & .tooltip-wrapper {
    position: absolute;
    top: 100%;
    left: 50%;
    display: none;
    background: #0c1524bf;
    border-radius: 3px;
    padding: 4px 7px;
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
    white-space: nowrap;
    transform: translate(-50%, 5px);
  }
  ${({ scheme }) => scheme};
`
