import React from 'react'
import { useDispatch } from 'react-redux'
import get from 'lodash/get'

import { _getStore } from 'src/storage/configureStore'
import { filtersUpdate } from '@entities/filters/actions'

import Badge from '@components/shared/Badge'

export default function Checkbox ({ field, item, optionsConfig }) {
	const dispatch = useDispatch()
	const clearCheckbox = React.useCallback(() => {
		const property = get(_getStore().getState(), `filter.${field}`, [])
		const newProperty = property.filter(current => current !== item)
		dispatch(filtersUpdate({ [field]: newProperty }))
	}, [dispatch, field, item])
	const parsedlabel = React.useMemo(() => {
		if (!optionsConfig) {
			console.warn('"optionsConfig" not provided for Checkbox badge')
			return null
		}
		const options = optionsConfig[field]
		if (!options) {
			console.warn(`Field ${field} not exist in "optionsConfig"`)
			return null
		}
		const option = options.find(option => option.value === item)
		if (!option) {
			console.warn(`Option ${item} not exist in ${field} options`)
			return null
		}
    const label = option.label
    if (label === 'Yes' || label === 'No') {
      return (
        <span className='g-t-capitalize'>
          {field}: {label}
        </span>
      )
    }
		return option.label
	}, [optionsConfig, field, item])
	return (
		<Badge
			size='l'
			color='primary'
			iconClose
			onCloseIconClick={clearCheckbox}
		>
			{parsedlabel}
		</Badge>
	)
}
