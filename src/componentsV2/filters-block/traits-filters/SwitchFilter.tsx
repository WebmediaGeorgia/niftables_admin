// @ts-nocheck
import React from 'react'


import styles from './TraitsFilters.module.scss'

import TraitsSwitch from './traits-switch'

export default function SwitchFilter ({ trait: { type, description } }) {
	return (
		<div className={styles.wrapper}>
			<div className={styles['group-title']}>
				{description}
			</div>
			<TraitsSwitch
				type={type}
				field={description}
			/>
		</div>
	)
}
