// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'

import { PACKS } from '@constants/payments'
import { OPEN_PACKS_DETAILS } from '@constants/modals'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { setModal } from '@entities/modal/actions'

import PlateGrid from '@commonV2/grids/PlateGrid'
import EmptyView from '@components/shared/EmptyView'
import MyPackCard from '@commonV2/cards/my-pack-card'
import {GRID_SMALL, USER_PACKS_PAGE} from "@constants/view-types";

export default function UserPacksList () {
	const dispatch = useDispatch()
  const packs = useTypedSelector((state) => state.userPacks.packs)

  const handleCardClick = React.useCallback((token) => {
		dispatch(setModal({
			isOpen: true,
			viewType: OPEN_PACKS_DETAILS,
			options: {
				type: PACKS,
        initialPoint: OPEN_PACKS_DETAILS,
        actionPoint: OPEN_PACKS_DETAILS,
        token
			},
			data: token.pack
		}))
	}, [dispatch])

	if (!packs) return null

	if (packs.length === 0) {
		return (
			<EmptyView
        emoji='😿'
				btnUrl='/packs'
				btnText='Buy Pack'
				text='No items to display'
			/>
		)
	}

  return (
    <PlateGrid page={USER_PACKS_PAGE} viewType={GRID_SMALL}>
      {packs.map((token) => (
        <MyPackCard
          key={token.id}
          token={token}
          clickHandler={() => handleCardClick(token)}
        />
      ))}
    </PlateGrid>
  )
}
