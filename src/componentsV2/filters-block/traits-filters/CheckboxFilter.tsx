// @ts-nocheck
import React from 'react'

import { OPTION } from '@constants/filters'

import styles from './TraitsFilters.module.scss'

import TraitsCheckboxGroup from './traits-checkbox-group'

export default function CheckboxFilter ({ trait: { type, description, values } }) {
	const checkboxOptions = React.useMemo(() => {
		return values.map(value => {
			return {
				type: OPTION,
				value: value,
				label: value
			}
		})
	}, [values])
	return (
		<div className={styles.wrapper}>
			<div className={styles['group-title']}>
				{description}
			</div>
			<TraitsCheckboxGroup
				options={checkboxOptions}
				type={type}
				field={description}
				showCount={3}
			/>
		</div>
	)
}
