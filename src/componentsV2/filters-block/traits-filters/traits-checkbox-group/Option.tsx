// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import get from 'lodash/get'

import { TRAITS } from '@constants/filter'

import styles from './CheckboxGroup.module.scss'

import { _getStore } from 'src/storage/configureStore'
import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { filtersUpdate } from '@entities/filters/actions'

import Checkbox from '@commonV2/Checkbox'

import cloneDeep from '@utils/cloneDeep'

export default function Option ({ type, option: { value, label }, field }) {
	const dispatch = useDispatch()
	const isSelected = useTypedSelector(state => {
		const traits = get(state, `filter.${TRAITS}`)
		const trait = traits.find(trait => trait.label === field)
		if (!trait) return false
		return !!trait.options.find(option => option === value)
	})
	const handleToggle = React.useCallback(() => {
		let traits = cloneDeep(get(_getStore().getState(), `filter.${TRAITS}`))
		const trait = traits.find(trait => trait.label === field)
		// create trait if not exist
		if (!trait) {
			traits.push({ type, label: field, options: [value] })
			return dispatch(filtersUpdate({ traits, page: 1 }))
		}
		const traitIndex = traits.findIndex(trait => trait.label === field)
		const options = trait.options
		// remove option if exist
		if (options.includes(value)) {
			traits[traitIndex].options = options.filter(item => item !== value)
			// handle removing trait if all values empty
			if (traits[traitIndex].options.length === 0) {
				traits = traits.filter(trait => trait.label !== field)
			}
		} else {
			// add value
			traits[traitIndex].options.push(value)
		}
		return dispatch(filtersUpdate({ traits, page: 1 }))
	}, [dispatch, _getStore, type, value, field])
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

