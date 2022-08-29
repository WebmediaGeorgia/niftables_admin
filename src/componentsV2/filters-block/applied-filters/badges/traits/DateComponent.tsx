import React from 'react'
import { useDispatch } from 'react-redux'
import get from 'lodash/get'

import { TRAITS } from '@constants/filter'

import { _getStore } from 'src/storage/configureStore'
import { filtersUpdate } from '@entities/filters/actions'

import cloneDeep from '@utils/cloneDeep'

import Badge from '@components/shared/Badge'

export default function DateComponent ({ trait: { label, min, max } }) {
	const dispatch = useDispatch()

	const clearDate = React.useCallback(() => {
		let traits = cloneDeep(get(_getStore().getState(), `filter.${TRAITS}`))
		traits = traits.filter(trait => trait.label !== label)
		dispatch(filtersUpdate({ traits, page: 1 }))
	}, [label])

	if (!min || !max) return null

	return (
		<Badge
			size='l'
			color='primary'
			iconClose
			onCloseIconClick={clearDate}
		>
			{label}: {min} - {max}
		</Badge>
	)
}
