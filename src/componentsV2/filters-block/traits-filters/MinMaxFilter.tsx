// @ts-nocheck
import React from 'react'

import styles from './TraitsFilters.module.scss'

import TraitsRangePicker from './traits-range-picker'

export default function MinMaxFilter ({ trait: { type, description } }) {
	return (
		<div className={styles.wrapper}>
			<div className={styles['group-title']}>
				{description}
			</div>
			<TraitsRangePicker
				type={type}
				field={description}
			/>
		</div>
	)
}
