import React from 'react'
import { useDispatch } from 'react-redux'

import {
	FROM_DATE,
	TO_DATE,
	DROP_DATE_FROM,
	DROP_DATE_TO
} from '@constants/filter'

import { filtersUpdate } from '@entities/filters/actions'

import Badge from '@components/shared/Badge'

const dateLabels = {
	[FROM_DATE]: 'Created from',
	[TO_DATE]: 'Created to',
	[DROP_DATE_FROM]: 'Dropped from',
	[DROP_DATE_TO]: 'Dropped to'
}

export default function Date ({ field, value }) {
	const dispatch = useDispatch()
	const clearDate = React.useCallback(() => {
		dispatch(filtersUpdate({ [field]: '' }))
	}, [dispatch, field])
	const parsedlabel = React.useMemo(() => {
		const label = dateLabels[field]
		if (!label) {
			console.warn(`Bage label for Date type: ${field} not implemented`)
			return
		}
		return label
	}, [field])
	return (
		<Badge
			size='l'
			color='primary'
			iconClose
			onCloseIconClick={clearDate}
		>
			{parsedlabel} {value}
		</Badge>
	)
}
