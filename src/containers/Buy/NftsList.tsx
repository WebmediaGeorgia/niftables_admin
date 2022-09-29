// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'

import { NFT_DETAILS, NFT_BUY_OPTIONS } from '@constants/modals'
import { NFT } from '@constants/payments'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { setModal } from '@entities/modal/actions'

import PlateGrid from '@commonV2/grids/PlateGrid'
import NftCard from '@commonV2/cards/nft-card'
import EmptyItems from '@commonV2/EmptyItems'
import {NFT_PAGE} from "@constants/view-types";

export default function NftsList () {
	const dispatch = useDispatch()
  const list = useTypedSelector((state) => state.nft.list)

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

  if (list.length === 0) {
    return <EmptyItems withReset />
  }

  return (
    <PlateGrid page={NFT_PAGE}>
      {list.map((nft) => {
        return (
          <NftCard
            key={nft.id}
            nft={nft}
            clickHandler={() => openNftDetails(nft)}
          />
        );
      })}
    </PlateGrid>
  );
}
