import React from 'react'
import { useDispatch } from 'react-redux'

import { filtersUpdate } from '@entities/filters/actions'

import Badge from '@components/shared/Badge'

export default function Collection ({ field, collection }) {
	const dispatch = useDispatch()
	const clearCollection = React.useCallback(() => {
		dispatch(filtersUpdate({ [field]: null }))
	}, [dispatch, field])
	return (
		<Badge
			size='l'
			color='primary'
			iconClose
			onCloseIconClick={clearCollection}
		>
			{collection.name}
		</Badge>
	)
}
