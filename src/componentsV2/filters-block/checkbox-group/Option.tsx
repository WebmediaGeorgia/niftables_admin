// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import get from 'lodash/get'

import styles from './CheckboxGroup.module.scss'

import { _getStore } from 'src/storage/configureStore'
import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { filtersUpdate } from '@entities/filters/actions'

import Checkbox from '@commonV2/Checkbox'

export default function Option ({ option: { value, label }, field }) {
	const dispatch = useDispatch()
	const isSelected = useTypedSelector(state => get(state, `filter.${field}`, []).includes(value))
	const handleToggle = React.useCallback(() => {
		const property = get(_getStore().getState(), `filter.${field}`, [])
    let newProperty
		if (property.includes(value)) {
			newProperty = property.filter(item => item !== value)
		} else {
			newProperty = [...property, value]
		}
		dispatch(filtersUpdate({ [field]: newProperty, page: 1 }))
	}, [dispatch, _getStore, value])
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

