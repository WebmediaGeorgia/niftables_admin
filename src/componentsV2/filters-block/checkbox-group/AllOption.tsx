// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'

import { ALL_OPTION, COLLAPSE_OPTION, OPTION } from '@constants/filters'

import styles from './CheckboxGroup.module.scss'

import { _getStore } from 'src/storage/configureStore'
import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { filtersUpdate } from '@entities/filters/actions'

import Checkbox from '@commonV2/Checkbox'

function allOptionsValues (options) {
	const values = []
	options.forEach(({ type, value, options }) => {
		if (type === ALL_OPTION) return
		if (type === OPTION) return values.push(value)
		if (type === COLLAPSE_OPTION) {
			options.forEach(option => values.push(option.value))
			return
		}
	})
	return values
}

function isAllSelected (currentSelected, allOptions) {
	return currentSelected.sort().join(',') === allOptions.sort().join(',')
}

export default function AllOption ({ options, option: { value, label } , field }) {
	const dispatch = useDispatch()
	const isSelected = useTypedSelector(state => {
		return isAllSelected([...state.filter[field]], allOptionsValues(options))
	})
	const handleToggle = React.useCallback(() => {
		const property = [..._getStore().getState().filter[field]]
		const allOptions = allOptionsValues(options)
		let newProperty
		if (isAllSelected(property, allOptions)) {
			newProperty = []
		} else {
			newProperty = allOptions
		}
		dispatch(filtersUpdate({ [field]: newProperty, page: 1 }))
	}, [dispatch, _getStore, options])
	return (
		<Checkbox
			className={styles['check-box']}
			label={label}
			color='primary'
			checked={isSelected}
			changeHandler={handleToggle}
		/>
	)
}

