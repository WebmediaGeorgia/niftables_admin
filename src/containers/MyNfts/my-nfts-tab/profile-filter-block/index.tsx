// @ts-nocheck
import React from 'react'

import { useSelectedCollection } from '@hooks/useFilters'

import { MenuBar } from '@components/shared/MenuBar'
import AppliedFilters from '@componentsV2/filters-block/applied-filters'
import CollectionFilter from '@componentsV2/filters-block/collection-filter'
import RarityFilter from '@componentsV2/filters-block/rarity-filter'
import UtilityFilter from '@componentsV2/filters-block/utility-filter'
import TraitsFilters from '@componentsV2/filters-block/traits-filters'
import DateFilter from '@componentsV2/filters-block/date-filter'

export default function ProfileFilterBlock () {
	const collection = useSelectedCollection()
  return (
		<MenuBar>
			<AppliedFilters collection={collection} />
			<CollectionFilter />
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
