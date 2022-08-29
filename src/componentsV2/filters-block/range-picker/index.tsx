// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import get from 'lodash/get'

import styles from './RangePicker.module.scss'

import { _getStore } from 'src/storage/configureStore'

import { filtersUpdate } from '@entities/filters/actions'

import NumberInput from './NumberInput'

export default function RangePicker ({
	minField, maxField, minPlaceholder = 'Min', maxPlaceholder = 'Max'
}) {
	const dispatch = useDispatch()
	const minBlur = React.useCallback((value) => {
		const max = get(_getStore().getState(), `filter.${maxField}`)
		if (max && (+value > +max)) {
			return dispatch(filtersUpdate({ [minField]: value, [maxField]: value, page: 1 }))
		}
		dispatch(filtersUpdate({ [minField]: value, page: 1 }))
	}, [dispatch, minField, maxField])
	const maxBlur = React.useCallback((value) => {
		const min = get(_getStore().getState(), `filter.${minField}`)
		if (min && value !== '' && (+value < +min)) {
			return dispatch(filtersUpdate({ [maxField]: value, [minField]: value, page: 1 }))
		}
		dispatch(filtersUpdate({ [maxField]: value, page: 1 }))
	}, [dispatch, minField, maxField])
	return (
		<div className={styles.priceWrapper}>
			<NumberInput
				field={minField}
				placeholder={minPlaceholder}
				blurHandler={minBlur}
			/>
			<div className={styles.priceTo}>to</div>
			<NumberInput
				field={maxField}
				placeholder={maxPlaceholder}
				blurHandler={maxBlur}
			/>
		</div>
	)
}
