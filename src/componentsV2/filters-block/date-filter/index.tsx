// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import get from 'lodash/get'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { filtersUpdate } from '@entities/filters/actions'

import AccordionItem from '@components/shared/Accordion/AccordionItem'
import DatePicker from '@commonV2/DatePicker'

export default function DateFilter ({
	title, fromField, toField
}) {
	const dispatch = useDispatch()
	const fromDate = useTypedSelector(state => get(state, `filter.${fromField}`, null))
	const toDate = useTypedSelector(state => get(state, `filter.${toField}`, null))

	const changeHandler = React.useCallback(([fromDate, toDate]) => {
		dispatch(filtersUpdate({
			[fromField]: fromDate,
			[toField]: toDate,
			page: 1
		}))
	}, [dispatch])

	return (
		<AccordionItem
			defaultOpen
			size='s'
			color='transparent'
			title={title}
		>
			<DatePicker
				placeholder='Select date or date range'
				startDate={fromDate}
				endDate={toDate}
				changeHandler={changeHandler}
			/>
		</AccordionItem>
	)
}
