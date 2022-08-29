import React from 'react'
import { useDispatch } from 'react-redux'
import get from 'lodash/get'

import { TRAITS } from '@constants/filter'
import { switchOptions } from '@constants/filters'

import { _getStore } from 'src/storage/configureStore'
import { filtersUpdate } from '@entities/filters/actions'

import cloneDeep from '@utils/cloneDeep'

import Badge from '@components/shared/Badge'

export default function BooleanComponent ({ trait }) {
	const dispatch = useDispatch()
	const clearTraitsBoolean = React.useCallback(() => {
		let traits = cloneDeep(get(_getStore().getState(), `filter.${TRAITS}`))
		traits = traits.filter(({ label }) => label !== trait.label)
		dispatch(filtersUpdate({ traits, page: 1 }))
	}, [trait])
	const parsedValue = React.useMemo(() => {
		return switchOptions.find(option => option.value === trait.value)?.label
	}, [dispatch, trait])
	return (
		<Badge
			size='l'
			color='primary'
			iconClose
			onCloseIconClick={clearTraitsBoolean}
		>
			{trait.label}: {parsedValue}
		</Badge>
	)
}
