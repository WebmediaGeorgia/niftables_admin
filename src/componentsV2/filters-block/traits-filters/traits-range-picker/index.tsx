// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import get from 'lodash/get'

import { TRAITS } from '@constants/filter'

import styles from './RangePicker.module.scss'

import { _getStore } from 'src/storage/configureStore'

import { filtersUpdate } from '@entities/filters/actions'

import NumberInput from './NumberInput'

import cloneDeep from '@utils/cloneDeep'

export default function TraitsRangePicker ({
	type, field, minPlaceholder = 'Min', maxPlaceholder = 'Max'
}) {
	const dispatch = useDispatch()

	const minBlur = React.useCallback((value) => {
		let traits = cloneDeep(get(_getStore().getState(), `filter.${TRAITS}`))
		const trait = traits.find(trait => trait.label === field)
		// create trait if not exist
		if (!trait) {
			traits.push({ type, label: field, min: value })
			return dispatch(filtersUpdate({ traits, page: 1 }))
		}
		const traitIndex = traits.findIndex(trait => trait.label === field)
		const max = trait.max
		// handle clear value
		if (value === '') {
			delete traits[traitIndex].min
			// handle removing trait if all values empty
			if (!max) {
				traits = traits.filter(trait => trait.label !== field)
			}
			return dispatch(filtersUpdate({ traits, page: 1 }))
		}
		// handle if min bigger than max
		if (max && (+value > +max)) {
			traits[traitIndex].min = value
			traits[traitIndex].max = value
			return dispatch(filtersUpdate({ traits, page: 1 }))
		}
		// handle min value
		traits[traitIndex].min = value
		dispatch(filtersUpdate({ traits, page: 1 }))
	}, [dispatch, type, field])

	const maxBlur = React.useCallback((value) => {
		let traits = cloneDeep(get(_getStore().getState(), `filter.${TRAITS}`))
		const trait = traits.find(trait => trait.label === field)
		// create trait if not exist
		if (!trait) {
			traits.push({ type, label: field, max: value })
			return dispatch(filtersUpdate({ traits, page: 1 }))
		}
		const traitIndex = traits.findIndex(trait => trait.label === field)
		const min = trait.min
		// handle clear value
		if (value === '') {
			delete traits[traitIndex].max
			// handle removing trait if all values empty
			if (!min) {
				traits = traits.filter(trait => trait.label !== field)
			}
			return dispatch(filtersUpdate({ traits, page: 1 }))
		}
		// handle if max lesser than min
		if (min && (+value < +min)) {
			traits[traitIndex].min = value
			traits[traitIndex].max = value
			return dispatch(filtersUpdate({ traits, page: 1 }))
		}
		// handle max value
		traits[traitIndex].max = value
		dispatch(filtersUpdate({ traits, page: 1 }))
	}, [dispatch, type, field])

	return (
		<div className={styles.priceWrapper}>
			<NumberInput
				field={field}
				valueField='min'
				placeholder={minPlaceholder}
				blurHandler={minBlur}
			/>
			<div className={styles.priceTo}>to</div>
			<NumberInput
				field={field}
				valueField='max'
				placeholder={maxPlaceholder}
				blurHandler={maxBlur}
			/>
		</div>
	)
}
