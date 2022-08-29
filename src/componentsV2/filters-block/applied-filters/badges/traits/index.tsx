import React from 'react'

import {
	STRING,
	BOOLEAN,
	INTEGER,
	DATE
} from '@constants/filters'

import StringComponent from './StringComponent'
import BooleanComponent from './BooleanComponent'
import IntegerComponent from './IntegerComponent'
import DateComponent from './DateComponent'

const config = {
	[STRING]: StringComponent,
	[BOOLEAN]: BooleanComponent,
	[INTEGER]: IntegerComponent,
	[DATE]: DateComponent,
}

export default function Traits ({ value }) {
	return value.map(trait => {
		const Component = config[trait.type]
		if (!Component) {
			console.warn(`Type: ${trait.type} not implemented in Traits badge`)
			return null
		}
		return (
			<Component
				key={trait.label}
				trait={trait}
			/>
		)
	})
}