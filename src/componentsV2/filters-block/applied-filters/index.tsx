// @ts-nocheck
import React from 'react'

import {
	// PAGE,
	COLLECTION_ID,
	MIN_PRICE,
	MAX_PRICE,
	RARITIES,
	TRAITS,
	FROM_DATE,
	TO_DATE,
	UTILITIES,
	DISTRIBUTIONS,
	// MERGEABLE,
	GENERATIVE,
	STATUS,
	DROP_DATE_FROM,
	DROP_DATE_TO
} from '@constants/filter'

import styles from './AppliedFilters.module.scss'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { useSelectedCollection } from '@hooks/useFilters'

import AccordionItem from '@components/shared/Accordion/AccordionItem'
import {
	isPage,
	isCollection,
	isEmpty,
	isCheckboxGroup,
	isRarities,
	isUtilities,
	isTraits,
} from './badges/renderRules'

// import Page from './badges/Page'
import Collection from './badges/Collection'
import Price from './badges/Price'
import Date from './badges/Date'
import CheckboxGroup from './badges/CheckboxGroup'
import Rarities from './badges/Rarities'
import Utilities from './badges/Utilities'
import Traits from './badges/traits'
import ClearAll from './badges/ClearAll'

export const applyList = {
	// [PAGE]: {
	// 	isShow: isPage,
	// 	Component: Page
	// },
	[COLLECTION_ID]: {
		isShow: isCollection,
		Component: Collection
	},
	[MIN_PRICE]: {
		isShow: isEmpty,
		Component: Price
	},
	[MAX_PRICE]: {
		isShow: isEmpty,
		Component: Price
	},
	[FROM_DATE]: {
		isShow: isEmpty,
		Component: Date
	},
	[TO_DATE]: {
		isShow: isEmpty,
		Component: Date
	},
	[DROP_DATE_FROM]: {
		isShow: isEmpty,
		Component: Date
	},
	[DROP_DATE_TO]: {
		isShow: isEmpty,
		Component: Date
	},
	[DISTRIBUTIONS]: {
		isShow: isCheckboxGroup,
		Component: CheckboxGroup
	},
	// [MERGEABLE]: CheckboxGroup,
	[GENERATIVE]: {
		isShow: isCheckboxGroup,
		Component: CheckboxGroup
	},
	[STATUS]: {
		isShow: isCheckboxGroup,
		Component: CheckboxGroup
	},
	[RARITIES]: {
		isShow: isRarities,
		Component: Rarities
	},
	[UTILITIES]: {
		isShow: isUtilities,
		Component: Utilities
	},
	[TRAITS]: {
		isShow: isTraits,
		Component: Traits
	},
}

export default function AppliedFilters ({ optionsConfig, collection }) {
	const filter = useTypedSelector(state => state.filter)
	const selectedCollection = useSelectedCollection() // this need for hide collection badge on collection page

	const parsedBadges = React.useMemo(() => {
		return Object.keys(filter)
			.map(key => {
				const config = applyList[key]
				if (!config) return
				const { isShow, Component } = config
				const value = filter[key]
				if (!isShow({ value, collection, selectedCollection })) return
				return (
					<Component
						key={key}
						field={key}
						value={value}
						optionsConfig={optionsConfig}
						collection={collection}
					/>
				)
			})
			.filter(item => item)
	}, [filter, collection, optionsConfig, collection, selectedCollection])

  return (
    <div className={styles.wrapper}>
      <AccordionItem
        title='Applied filters'
        isFirst
        defaultOpen
        size='s'
        color='default'
      >
        <div className={styles['badges-list']}>
          {parsedBadges}
        </div>
        {parsedBadges.length > 0 && (
          <ClearAll />
        )}
      </AccordionItem>
    </div>
  )
}
