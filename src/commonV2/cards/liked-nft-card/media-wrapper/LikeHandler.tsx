// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { _getStore } from 'src/storage/configureStore'
import { removeLikedNftsListLike } from '@entities/liked-nfts/actions'
import { likeNft } from '@requests/nfts'

import Like from '@commonV2/like'

export default React.memo(function LikeHandler ({ id, liked }) {
  const dispatch = useDispatch()

  const toggleLike = React.useCallback(async () => {
    const res = await likeNft({ id, like: !liked })
    if (!res) return
    dispatch(removeLikedNftsListLike({ id }))
  }, [dispatch, id, liked])

  return (
    <StyledLike
      colorScheme='primary'
      isLiked={liked}
      toggleLike={toggleLike}
    />
  )
})

const StyledLike = styled(Like)`
  && {
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: 2;
  }
`
