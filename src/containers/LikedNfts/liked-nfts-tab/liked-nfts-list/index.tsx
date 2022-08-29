// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'

import { NFT_DETAILS, NFT_BUY_OPTIONS } from '@constants/modals'
import { NFT } from '@constants/payments'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { setModal } from '@entities/modal/actions'

import EmptyView from '@components/shared/EmptyView'
import { Card } from '@components/Card/Card'

import { createCardItemFromNFt } from '@utils/nftUtils'

export default function LikedNftsList () {
	const dispatch = useDispatch()
  const nfts = useTypedSelector((state) => state.likedNfts.nfts)

	const openNftDetails = React.useCallback((nft) => {
		dispatch(setModal({
			isOpen: true,
			viewType: NFT_DETAILS,
			options: {
				type: NFT,
        initialPoint: NFT_DETAILS,
        actionPoint: NFT_BUY_OPTIONS
			},
			data: nft
		}))
	}, [dispatch])

	if (!nfts) return null

	if (nfts.length === 0) {
		return (
			<EmptyView
				emoji='💔'
				btnUrl='/buy'
				btnText='See all NFTs'
				text={`You haven't favorited any items yet`}
			/>
		)
	}

	return (
		<>
			{nfts.map((nft) => {
				return (
					<Card
						showLike
						key={nft.id}
						item={createCardItemFromNFt(nft)}
						isNFTEntity
						onClick={() => openNftDetails(nft)}
					/>
				)
			})}
		</>
	)
}
