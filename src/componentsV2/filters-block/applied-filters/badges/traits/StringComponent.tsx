import React from 'react'
import { useDispatch } from 'react-redux'
import get from 'lodash/get'

import { TRAITS } from '@constants/filter'

import { _getStore } from 'src/storage/configureStore'
import { filtersUpdate } from '@entities/filters/actions'

import cloneDeep from '@utils/cloneDeep'

import Badge from '@components/shared/Badge'

function TraitsCheckbox ({ value, trait }) {
	const dispatch = useDispatch()
	const clearTraitsCheckbox = React.useCallback(() => {
		let traits = cloneDeep(get(_getStore().getState(), `filter.${TRAITS}`))
		const traitIndex = traits.findIndex(({ label }) => label === trait.label)
		traits[traitIndex].options = trait.options.filter(option => option !== value)
		if (traits[traitIndex].options.length === 0) {
			traits = traits.filter(({ label }) => label !== trait.label)
		}
		dispatch(filtersUpdate({ traits, page: 1 }))
	}, [dispatch, value, trait])
	return (
		<Badge
			size='l'
			color='primary'
			iconClose
			onCloseIconClick={clearTraitsCheckbox}
		>
			{trait.label}: {value}
		</Badge>
	)
}

export default function StringComponent ({ trait }) {
	return trait.options.map(value => {
		return (
			<TraitsCheckbox
				key={value}
				value={value}
				trait={trait}
			/>
		)
	})
}
