// @ts-nocheck
import React from 'react'

import {
	STRING,
	BOOLEAN,
	INTEGER,
	DATE
} from '@constants/filters'

import AccordionItem from '@components/shared/Accordion/AccordionItem'
import CheckboxFilter from './CheckboxFilter'
import SwitchFilter from './SwitchFilter'
import MinMaxFilter from './MinMaxFilter'
import DateFilter from './DateFilter'

const config = {
	[STRING]: CheckboxFilter,
	[BOOLEAN]: SwitchFilter,
	[INTEGER]: MinMaxFilter,
	[DATE]: DateFilter
}

function TraitsList ({ traits }) {
	return traits.map(trait => {
		const Component = config[trait.type]
		if (!Component) {
			console.warn(`Trait filter with type: ${trait.type} not implemented`)
			return null
		}
		return (
			<Component
				key={trait.description}
				trait={trait}
			/>
		)
	})
}

export default function TraitsFilters ({ collection }) {
	if (!collection) return null
	if (!collection.traits) return null
	if (collection.traits.length === 0) return null
	return (
		<AccordionItem
			defaultOpen
			size='s'
			color='transparent'
			title='Traits'
		>
			<TraitsList traits={collection.traits} />
		</AccordionItem>
	)
}
