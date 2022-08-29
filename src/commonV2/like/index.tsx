import React from 'react'

import AuthorizedLike from './AuthorizedLike'
import NotAuthorizedLike from './NotAuthorizedLike'

import { isLoggedIn, user2FAPassed } from '@utils/token'

export default function Like ({ className, isLiked, colorScheme = 'primary', toggleLike }) {
  if (isLoggedIn() && user2FAPassed()) {
    return (
      <AuthorizedLike
        className={className}
        isLiked={isLiked}
        toggleLike={toggleLike}
        colorScheme={colorScheme}
      />
    )
  }

  return (
    <NotAuthorizedLike
      className={className}
      colorScheme={colorScheme}
    />
  )
}
