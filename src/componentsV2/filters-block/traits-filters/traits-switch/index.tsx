// @ts-nocheck
import React from 'react'

import { switchOptions } from '@constants/filters'

import Option from './Option'

export default function TraitsSwitch ({ type, field }) {
	const parsedOption = React.useMemo(() => {
		return switchOptions.map((option) => {
			return (
				<Option
					key={option.value}
					type={type}
					option={option}
					field={field}
				/>
			)
		})
	}, [type, field])

	return (
		<div>
			{parsedOption}
		</div>
	)
}
