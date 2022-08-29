import React from 'react'

import Checkbox from './Checkbox'

export default function CheckboxGroup ({ field, value, optionsConfig }) {
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