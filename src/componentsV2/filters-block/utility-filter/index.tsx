// @ts-nocheck
import React from 'react'

import { ALL_OPTION, COLLAPSE_OPTION, OPTION } from '@constants/filters'

import AccordionItem from '@components/shared/Accordion/AccordionItem'
import CheckboxGroup from '@componentsV2/filters-block/checkbox-group'

export default function UtilityFilter ({ collection }) {
	const utilityOptions = React.useMemo(() => {
		if (!collection) return []
		// "All" option first
		const parsedOptions = [
			{
				type: ALL_OPTION,
				value: 'all',
				label: 'All'
			}
		]
		// optional "redeem" options
		if (collection.redeemOptions && collection.redeemOptions.length !== 0) {
			const redeemOptions = {
				type: COLLAPSE_OPTION,
				value: 'reedeemble',
				label: 'Reedeemble',
				options: collection.redeemOptions.map(redeem => {
					return {
						type: OPTION,
						value: redeem,
						label: redeem
					}
				})
			}
			parsedOptions.push(redeemOptions)
		}
		// default options
		parsedOptions.push({
			type: OPTION,
			value: 'ACTIVATABLE',
			label: 'Activatable'
		})
		parsedOptions.push({
			type: OPTION,
			value: 'none',
			label: 'None'
		})
		return parsedOptions
	}, [collection])

	if (!collection) return null
	if (!collection.redeemable) return null

	return (
		<AccordionItem
			defaultOpen
			size='s'
			color='transparent'
			title='Utility'
		>
			<CheckboxGroup
				options={utilityOptions}
				field='utilities'
			/>
		</AccordionItem>
	)
}
