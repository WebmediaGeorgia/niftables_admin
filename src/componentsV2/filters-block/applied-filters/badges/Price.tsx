import React from 'react'
import { useDispatch } from 'react-redux'

import { MIN_PRICE, MAX_PRICE } from '@constants/filter'

import { filtersUpdate } from '@entities/filters/actions'

import Badge from '@components/shared/Badge'

const priceLabels = {
	[MIN_PRICE]: 'Min price',
	[MAX_PRICE]: 'Max price'
}

export default function Price ({ field, value }) {
	const dispatch = useDispatch()
	const clearPrice = React.useCallback(() => {
		dispatch(filtersUpdate({ [field]: '' }))
	}, [dispatch, field])
	const parsedlabel = React.useMemo(() => {
		const label = priceLabels[field]
		if (!label) {
			console.warn(`Bage label for Price type: ${field} not implemented`)
			return
		}
		return label
	}, [field])
	return (
		<Badge
			size='l'
			color='primary'
			iconClose
			onCloseIconClick={clearPrice}
		>
			{parsedlabel} ${value}
		</Badge>
	)
}
