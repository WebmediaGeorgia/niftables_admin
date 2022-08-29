import React from 'react'

import Checkbox from './Checkbox'

export default function Utilities ({ field, value, collection }) {
	const redeemOptions = collection?.redeemOptions || []
	const optionsConfig = {
		[field]: [
			{
				value: 'all',
				label: 'All'
			},
			...redeemOptions.map(redeem => {
				return {
					value: redeem,
					label: redeem
				}
			}),
			{
				value: 'ACTIVATABLE',
				label: 'Activatable'
			},
			{
				value: 'none',
				label: 'None'
			}
		]
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