import React from 'react'
import { useDispatch } from 'react-redux'

import { filtersUpdate } from '@entities/filters/actions'

import Badge from '@components/shared/Badge'

export default function Page ({ field, value }) {
	const dispatch = useDispatch()
	const clearPage = React.useCallback(() => {
		dispatch(filtersUpdate({ [field]: 1 }))
	}, [dispatch, field])
	return (
		<Badge
			size='l'
			color='primary'
			iconClose
			onCloseIconClick={clearPage}
		>
			Page {value}
		</Badge>
	)
}
