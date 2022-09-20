// @ts-nocheck
import React from 'react'

import { OPTION } from '@constants/filters'

import AccordionItem from '@components/shared/Accordion/AccordionItem'
import CheckboxGroup from '@componentsV2/filters-block/checkbox-group'

export default function RarityFilter ({ collection }) {
	if (!collection) return null
	if (!collection.rarities) return null
	if (collection.rarities.length === 0) return null
	const rarityOptions = collection.rarities.map(rarity => {
		return {
			type: OPTION,
			value: rarity,
			label: rarity
		}
	})

  if(collection.generative)  {
    rarityOptions.push({
      type: OPTION,
      value: 'None',
      label: 'None'
    });
  }

	return (
		<AccordionItem
			defaultOpen
			size='s'
			color='transparent'
			title='Rarity'
		>
			<CheckboxGroup
				options={rarityOptions}
				field='rarities'
			/>
		</AccordionItem>
	)
}
