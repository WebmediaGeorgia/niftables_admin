// @ts-nocheck
import React from 'react'

import AccordionItem from '@components/shared/Accordion/AccordionItem'
import RangePicker from '@componentsV2/filters-block/range-picker'

export default function PriceFilter () {
	return (
		<AccordionItem
			defaultOpen
			size='s'
			color='default'
			title='Price (USD)'
		>
			<RangePicker
				minField='minPrice'
				maxField='maxPrice'
			/>
		</AccordionItem>
	)
}
