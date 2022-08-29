// @ts-nocheck
import React from 'react'
import cn from 'classnames'

import styles from './CheckboxGroup.module.scss'

import Option from './Option'

export default function CollapseOption ({ option: { label, options }, field }) {
	const [isOpen, setIsOpen] = React.useState(false)
	return (
		<div className={styles.collapsedBlock}>
			<div
				className={styles.reedeem}
				onClick={() => setIsOpen(prev => !prev)}
			>
				<div className={cn(styles.square, { [styles.collapsed]: !isOpen })} />
				<div className={styles.squareText}>
					{label}
				</div>
			</div>
			{isOpen && (
				<div className={styles['sub-options']}>
					{options.map(option => {
						return (
							<Option
								key={option.value}
								option={option}
								field={field}
							/>
						)
					})}
				</div>
			)}
		</div>
	)
}
