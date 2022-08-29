// @ts-nocheck
import React from 'react'

import styles from './CheckboxGroup.module.scss'

import Option from './Option'

export default function TraitsCheckboxGroup ({ options = [], type, field, showCount }) {
	const [isOpen, setIsOpen] = React.useState(!showCount)

	const parsedOption = React.useMemo(() => {
		let newOption = [...options]
		if (showCount && !isOpen) newOption = newOption.slice(0, showCount)
		return newOption.map((option) => {
			return (
				<Option
					key={option.value}
					type={type}
					option={option}
					field={field}
				/>
			)
		})
	}, [options, type, field, showCount, isOpen])

	return (
		<div>
			{parsedOption}
			{showCount && showCount < options.length && (
				<div
					className={styles['see-more-wrapper']}
					onClick={() => setIsOpen(current => !current)}
				>
					{isOpen ? 'See less' : 'See more'}
				</div>
			)}
		</div>
	)
}
