// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'

import { _getStore } from 'src/storage/configureStore'
import { updateNftsListLike } from '@entities/nft/redux/actions'
import { likeNft } from '@requests/nfts'

import Like from '@commonV2/like'

export default function LikeHandler ({ item }) {
  const dispatch = useDispatch()

  const toggleLike = React.useCallback(async () => {
    const { id, liked } = item
    const res = await likeNft({ id, like: !liked })
    if (!res) return
    dispatch(updateNftsListLike({ id, amount: res.amount, liked: !liked }))
  }, [dispatch, item])

  return (
    <Like
      colorScheme='primary'
      isLiked={item.liked}
      toggleLike={toggleLike}
    />
  )
}
