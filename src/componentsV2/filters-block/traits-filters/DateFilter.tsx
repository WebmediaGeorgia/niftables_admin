// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import get from 'lodash/get'

import { TRAITS } from '@constants/filter'

import styles from './TraitsFilters.module.scss'

import { _getStore } from 'src/storage/configureStore'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { filtersUpdate } from '@entities/filters/actions'

import DatePicker from '@commonV2/DatePicker'

import cloneDeep from '@utils/cloneDeep'

export default function DateFilter ({ trait: { type, description } }) {
	const dispatch = useDispatch()
	const fromDate = useTypedSelector(state => {
		const traits = get(state, `filter.${TRAITS}`)
		const trait = traits.find(trait => trait.label === description)
		if (!trait) return null
		return trait.min
	})
	const toDate = useTypedSelector(state => {
		const traits = get(state, `filter.${TRAITS}`)
		const trait = traits.find(trait => trait.label === description)
		if (!trait) return null
		return trait.max
	})

	const changeHandler = React.useCallback(([fromDate, toDate]) => {
		let traits = cloneDeep(get(_getStore().getState(), `filter.${TRAITS}`))
		// handle removing trait if all values empty
		if (fromDate === null && toDate === null) {
			traits = traits.filter(trait => trait.label !== description)
			return dispatch(filtersUpdate({ traits, page: 1 }))
		}
		const trait = traits.find(trait => trait.label === description)
		// create trait if not exist
		if (!trait) {
			traits.push({ type, label: description, min: fromDate, max: toDate })
			return dispatch(filtersUpdate({ traits, page: 1 }))
		}
		// add value
		const traitIndex = traits.findIndex(trait => trait.label === description)
		traits[traitIndex].min = fromDate
		traits[traitIndex].max = toDate
		dispatch(filtersUpdate({ traits, page: 1 }))
	}, [dispatch, type, description])
	return (
		<div className={styles.wrapper}>
			<div className={styles['group-title']}>
				{description}
			</div>
			<DatePicker
				placeholder='Select date or date range'
				startDate={fromDate}
				endDate={toDate}
				changeHandler={changeHandler}
			/>
		</div>
	)
}
