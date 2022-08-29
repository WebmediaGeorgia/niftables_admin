import React from 'react'

import Checkbox from './Checkbox'

export default function Rarities ({ field, value, collection }) {
	const optionsConfig = {
		[field]: collection.rarities.map(rarity => {
			return {
				value: rarity,
				label: rarity
			}
		})
	}
	return value.map(item => {
		return (
			<Checkbox
				key={item}
				field={field}
				item={item}
				optionsConfig={optionsConfig}
			/>
		)
	})
}