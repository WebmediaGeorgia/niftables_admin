// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import get from 'lodash/get'

import { _getStore } from 'src/storage/configureStore'
import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { updateNftsListLike } from '@entities/nft/redux/actions'
import { setModal } from '@entities/modal/actions'
import { likeNft } from '@requests/nfts'

import Like from '@commonV2/like'

export default function LikeHandler () {
  const dispatch = useDispatch()
	const liked = useTypedSelector(state => get(state, 'modal.data.liked'))
	const likesAmount = useTypedSelector(state => get(state, 'modal.data.likesAmount')) || 0

  const toggleLike = React.useCallback(async () => {
    const nft = _getStore().getState().modal.data
    const { id, liked } = nft
    const res = await likeNft({ id, like: !liked })
    if (!res) return
    dispatch(updateNftsListLike({ id, amount: res.amount, liked: !liked }))
    dispatch(setModal({ data: { ...nft, likesAmount: res.amount, liked: !liked } }))
  }, [dispatch])

  return (
    <StyledWrapper>
      <Like
        colorScheme='secondary'
        isLiked={liked}
        toggleLike={toggleLike}
      />
      <div className='counter'>
        {likesAmount}
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  .counter {
    font-size: 10px;
    font-weight: 400;
  }
`
