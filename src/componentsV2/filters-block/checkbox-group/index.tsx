// @ts-nocheck
import React from 'react'

import { ALL_OPTION, COLLAPSE_OPTION, OPTION } from '@constants/filters'

import styles from './CheckboxGroup.module.scss'

import { _getStore } from 'src/storage/configureStore'

import AllOption from './AllOption'
import CollapseOption from './CollapseOption'
import Option from './Option'

const config = {
	[ALL_OPTION]: AllOption,
	[COLLAPSE_OPTION]: CollapseOption,
	[OPTION]: Option
}

export default function CheckboxGroup ({ options = [], field, showCount }) {
	const [isOpen, setIsOpen] = React.useState(!showCount)

	const parsedOption = React.useMemo(() => {
		let newOption = [...options]
		if (showCount && !isOpen) newOption = newOption.slice(0, showCount)
		return newOption.map((option) => {
			const Component = config[option.type]
			if (!Component) {
				console.warn(`CheckboxGroup type: ${option.type}, not implemented`)
				return null
			}
			return (
				<Component
					key={option.value}
					options={options}
					option={option}
					field={field}
				/>
			)
		})
	}, [options, field, showCount, isOpen])

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
