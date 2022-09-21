// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'

import { ALL, AVAILABLE, SOLD_OUT } from '@constants/packs'
import { PACKS } from '@constants/payments'
import { PACKS_DETAILS, PACKS_BUY_OPTIONS } from '@constants/modals'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { setModal } from '@entities/modal/actions'

import PlateGrid from '@commonV2/grids/PlateGrid'
import EmptyItems from '@commonV2/EmptyItems'
import PackCard from '@commonV2/cards/pack-card'

const config = {
	[ALL]: () => true,
	[AVAILABLE]: ({ availableSupply }) => availableSupply !== 0,
	[SOLD_OUT]: ({ availableSupply }) => availableSupply === 0
}

export default function PacksList ({ filter }) {
	const dispatch = useDispatch()
	const packs = useTypedSelector(state => state.pack.list)

	const parsedPacks = React.useMemo(() => {
		const filterFn = config[filter]
		if (!filterFn) {
			console.warn(`Packs filter: ${filter} not implemented`)
			return packs
		}
		return packs.filter(filterFn)
	}, [filter, packs])

	const handleCardClick = React.useCallback((pack) => {
		dispatch(setModal({
			isOpen: true,
			viewType: PACKS_DETAILS,
			options: {
				type: PACKS,
        initialPoint: PACKS_DETAILS,
        actionPoint: PACKS_BUY_OPTIONS
			},
			data: pack
		}))
	}, [dispatch])

	if (parsedPacks.length === 0) {
    return <EmptyItems />
  }

	return (
		<PlateGrid className='g-mt-50'>
			{parsedPacks.map((pack) => (
				<PackCard
					key={pack.id}
					pack={pack}
					clickHandler={() => handleCardClick(pack)}
				/>
			))}
		</PlateGrid>
	)
}
