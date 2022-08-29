// @ts-nocheck
import React from 'react'

import { OPTION } from '@constants/filters'
import { DISTRIBUTIONS } from '@constants/filter'

import { useSelectedCollection } from '@hooks/useFilters'

import MenuBar from '@commonV2/MenuBar'
import AppliedFilters from '@componentsV2/filters-block/applied-filters'
import CheckboxGroup from '@componentsV2/filters-block/checkbox-group-filter'
import PriceFilter from '@componentsV2/filters-block/price-filter'
import CollectionFilter from '@componentsV2/filters-block/collection-filter'
import RarityFilter from '@componentsV2/filters-block/rarity-filter'
import UtilityFilter from '@componentsV2/filters-block/utility-filter'
import TraitsFilters from '@componentsV2/filters-block/traits-filters'
import DateFilter from '@componentsV2/filters-block/date-filter'

const distributionsOptions = [
	{
		type: OPTION,
    value: 'AUCTION',
    label: 'Auction',
  },
  {
		type: OPTION,
    value: 'FIXED_PRICE',
    label: 'Buy now',
  },
]

const optionsConfig = {
	[DISTRIBUTIONS]: distributionsOptions
}

export default function BuyFilterBlock () {
	const collection = useSelectedCollection()
  return (
		<MenuBar>
			<AppliedFilters
				optionsConfig={optionsConfig}
				collection={collection}
			/>
			<CheckboxGroup
				title='Buy option'
				options={distributionsOptions}
				field='distributions'
			/>
			<PriceFilter />
			<CollectionFilter />
			<RarityFilter collection={collection} />
			<UtilityFilter collection={collection} />
			<TraitsFilters collection={collection} />
			{collection && (
				<DateFilter
					title='Creation date'
					fromField='fromDate'
					toField='toDate'
				/>
			)}
		</MenuBar>
  )
}
