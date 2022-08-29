import React from 'react'
import styled, { css } from 'styled-components'

import NotLiked from 'public/other/favorite_clear.svg'
import Liked from 'public/other/favorite.svg'

export default function AuthorizedLike ({ className, isLiked, toggleLike, colorScheme }) {
  const handleToggle = React.useCallback((e) => {
    e.stopPropagation()
    toggleLike(!isLiked)
  }, [toggleLike, isLiked])

  const parsedIcon = React.useMemo(() => {
    if (isLiked) {
      return (
        <Liked
          className='icon'
          onClick={handleToggle}
        />
      )
    }
    return (
      <NotLiked
        className='icon'
        onClick={handleToggle}
      />
    )
  }, [isLiked, handleToggle])

  return (
    <StyledWrapper
      className={className}
      colorScheme={colorScheme}
    >
      {parsedIcon}
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
      }
      &:active {
        background: rgba(0, 0, 0, 0.5);
      }
    `,
    'transparent': css`

    `
  }
  return { scheme: config[colorScheme] }
})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  transition: all 0.2s;
  cursor: pointer;
  & .icon {
    path {
      fill: ${({ theme }) => theme.text.primary};
    }
  }
  ${({ scheme }) => scheme};
`
