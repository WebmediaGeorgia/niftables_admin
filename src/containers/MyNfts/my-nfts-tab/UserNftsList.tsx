// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'

import { WITHDRAW_DETAILS } from '@constants/modals'
import { NFT } from '@constants/payments'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { setModal } from '@entities/modal/actions'

import PlateGrid from '@commonV2/grids/PlateGrid'
import EmptyView from '@components/shared/EmptyView'
import MyNftCard from '@commonV2/cards/my-nft-card'

export default function UserNftsList () {
  const dispatch = useDispatch()
  const tokens = useTypedSelector((state) => state.userNftTokens.tokens)

  const openWithdrawDetails = React.useCallback((token) => {
    dispatch(setModal({
      isOpen: true,
			viewType: WITHDRAW_DETAILS,
      options: {
				type: NFT,
        initialPoint: WITHDRAW_DETAILS,
        actionPoint: WITHDRAW_DETAILS,
        token
			},
			data: token.nft
    }))
  }, [dispatch])

	if (!tokens) return null

	if (tokens.length === 0) {
    return (
			<EmptyView
				emoji='😿'
				btnUrl='/buy'
				btnText='Buy NFT'
				text='No items to display'
			/>
		)
  }

  return (
    <PlateGrid>
      {tokens.map((token) => {
        return (
          <MyNftCard
            key={tokens.id}
            token={token}
            clickHandler={() => openWithdrawDetails(token)}
          />
        )
      })}
    </PlateGrid>
  )
}
