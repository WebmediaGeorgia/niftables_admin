import React from 'react'
import { useDispatch } from 'react-redux'
import get from 'lodash/get'

import { TRAITS } from '@constants/filter'

import { _getStore } from 'src/storage/configureStore'
import { filtersUpdate } from '@entities/filters/actions'

import cloneDeep from '@utils/cloneDeep'

import Badge from '@components/shared/Badge'

export default function IntegerComponent ({ trait: { label, min, max } }) {
	const dispatch = useDispatch()

	const clearMinInteger = React.useCallback(() => {
		let traits = cloneDeep(get(_getStore().getState(), `filter.${TRAITS}`))
		const traitIndex = traits.findIndex(trait => trait.label === label)
		delete traits[traitIndex].min
		if (!max) {
			traits = traits.filter(trait => trait.label !== label)
		}
		dispatch(filtersUpdate({ traits, page: 1 }))
	}, [dispatch, label, max])

	const clearMaxInteger = React.useCallback(() => {
		let traits = cloneDeep(get(_getStore().getState(), `filter.${TRAITS}`))
		const traitIndex = traits.findIndex(trait => trait.label === label)
		delete traits[traitIndex].max
		if (!min) {
			traits = traits.filter(trait => trait.label !== label)
		}
		dispatch(filtersUpdate({ traits, page: 1 }))
	}, [dispatch, label, min])

	return (
		<>
			{min && (
				<Badge
					size='l'
					color='primary'
					iconClose
					onCloseIconClick={clearMinInteger}
				>
					{label} min: {min}
				</Badge>
			)}
			{max && (
				<Badge
					size='l'
					color='primary'
					iconClose
					onCloseIconClick={clearMaxInteger}
				>
					{label} max: {min}
				</Badge>
			)}
		</>
	)
}
