import React from 'react'
import { useDispatch } from 'react-redux'

import { filtersReset } from '@entities/filters/actions'

import Badge from '@components/shared/Badge'

export default function ClearAll () {
	const dispatch = useDispatch()
	const clearAll = React.useCallback(() => {
		dispatch(filtersReset())
	}, [dispatch])
	return (
		<Badge
			iconClose
			onCloseIconClick={clearAll}
		>
			Clear all
		</Badge>
	)
}
