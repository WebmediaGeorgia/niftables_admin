import React from 'react'

import Checkbox from './Checkbox'
import {OPTION} from "@constants/filters";

export default function Rarities ({ field, value, collection }) {
	const optionsConfig = {
		[field]: collection.rarities.map(rarity => {
			return {
				value: rarity,
				label: rarity
			}
		})
	}
  if(collection.generative)  {
    optionsConfig[field].push({
      type: OPTION,
      value: 'None',
      label: 'Rarity: None'
    });
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
