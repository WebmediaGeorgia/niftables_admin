import React from 'react'
import styled, { css } from 'styled-components'

import LikeIcon from 'public/other/favorite.svg'
import classnames from 'classnames'

export default function AuthorizedLike ({ className, isLiked, toggleLike, colorScheme }) {
  const handleToggle = React.useCallback((e) => {
    e.stopPropagation()
    toggleLike(!isLiked)
  }, [toggleLike, isLiked])

  const parsedIcon = React.useMemo(() => {
    return (
      <LikeIcon
        className={classnames("icon",  { 'not-liked': !isLiked })}
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
      & .icon {
        path {
          fill: #0D4B9E;
        }
      }
      &:hover {
        > .icon {
          opacity: 0.52;
        }
      }
    `,
    'secondary': css`
      > .icon {
        path {
          fill: white;
        }
      }
    `
  }
  return { scheme: config[colorScheme] }
})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  & .icon {
    transition: all 0.2s ease-out;
  }
  cursor: pointer;
  & .not-liked {
    opacity: 0.12;
  }
  ${({ scheme }) => scheme};
`
