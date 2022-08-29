// @ts-nocheck
import React from 'react'

import { OPTION } from '@constants/filters'
import { STATUS, DISTRIBUTIONS, GENERATIVE } from '@constants/filter'

import MenuBar from '@commonV2/MenuBar'
import AppliedFilters from '@componentsV2/filters-block/applied-filters'
import CheckboxGroup from '@componentsV2/filters-block/checkbox-group-filter'
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
	{
		type: OPTION,
    value: 'PACKS',
    label: 'Packs',
  }
]

const generativeOptions = [
	{
		type: OPTION,
    value: 'true',
    label: 'Yes',
  },
  {
		type: OPTION,
    value: 'false',
    label: 'No',
  },
]

const optionsConfig = {
	[STATUS]: statusOptions,
	[DISTRIBUTIONS]: distributionsOptions,
	[GENERATIVE]: generativeOptions
}

export default function CollectionsFilterBlock () {
  return (
		<MenuBar>
			<AppliedFilters
				optionsConfig={optionsConfig}
			/>
			<CheckboxGroup
				title='Status'
				options={statusOptions}
				field='status'
			/>
			<CheckboxGroup
				title='Distribution Type'
				options={distributionsOptions}
				field='distributions'
			/>
			<CheckboxGroup
				title='Generative'
				options={generativeOptions}
				field='generative'
			/>
			<DateFilter
				title='Drop date'
				fromField='dropDateFrom'
				toField='dropDateTo'
			/>
		</MenuBar>
  )
}
