// @ts-nocheck
import React from 'react'

import AccordionItem from '@components/shared/Accordion/AccordionItem'
import CheckboxGroup from '@componentsV2/filters-block/checkbox-group'

export default function CheckboxGroupFilter ({
	title, options, field
}) {
	return (
		<AccordionItem
			defaultOpen
			size='s'
			color='default'
			title={title}
		>
			<CheckboxGroup
				options={options}
				field={field}
			/>
		</AccordionItem>
	)
}
