// @ts-nocheck
import React from 'react'

import { OPTION } from '@constants/filters'
import { STATUS } from '@constants/filter'

import { useTypedSelector } from '@hooks/useNewTypedSelector'

import MenuBar from '@commonV2/MenuBar'
import AppliedFilters from '@componentsV2/filters-block/applied-filters'
import CheckboxGroup from '@componentsV2/filters-block/checkbox-group-filter'
import RarityFilter from '@componentsV2/filters-block/rarity-filter'
import UtilityFilter from '@componentsV2/filters-block/utility-filter'
import TraitsFilters from '@componentsV2/filters-block/traits-filters'
import DateFilter from '@componentsV2/filters-block/date-filter'

const statusOptions = [
	{
		type: OPTION,
    value: 'AVAILABLE',
    label: 'Available',
  },
  {
		type: OPTION,
    value: 'SOLD',
    label: 'Sold',
  },
]


const optionsConfig = {
	[STATUS]: statusOptions
}

export default function CollectionNftsFilterBlock () {
	const collection = useTypedSelector(state => state.collection.collection)
  return (
		<MenuBar>
			<AppliedFilters
				optionsConfig={optionsConfig}
				collection={collection}
			/>
			{collection.distribution !== 'PACKS' && (
				<CheckboxGroup
					title='Status'
					options={statusOptions}
					field='status'
				/>
			)}
			<RarityFilter collection={collection} />
			<UtilityFilter collection={collection} />
			<TraitsFilters collection={collection} />
			<DateFilter
				title='Creation date'
				fromField='fromDate'
				toField='toDate'
			/>
		</MenuBar>
  )
}
