import React from 'react'
import { useDispatch } from 'react-redux'

import {filtersReset, filtersUpdate} from '@entities/filters/actions'

import Badge from '@components/shared/Badge'

export default function Collection ({ field, collection }) {
	const dispatch = useDispatch()
	const clearCollection = React.useCallback(() => {
		dispatch(filtersReset())
	}, [dispatch]);

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
