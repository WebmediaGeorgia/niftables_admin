// @ts-nocheck
import React from 'react'

import { useTypedSelector } from '@hooks/useNewTypedSelector'

import AccordionItem from '@components/shared/Accordion/AccordionItem'
import SelectedCollectionOption from './selected-collection-option'
import CollectionOption from './collection-option'

export default function CollectionFilter () {
	const collections = useTypedSelector(state => state.collections.list)
	const collectionId = useTypedSelector(state => state.filter.collectionId)
	
	const content = React.useMemo(() => {
		if (!collections) return null
		if (collectionId) {
			const collection = collections.find(collection => collection.id === collectionId)
			if (!collection) return null
			return <SelectedCollectionOption collection={collection} />
		}
		return collections.map(collection => {
			return (
				<CollectionOption
					key={collection.id}
					collection={collection}
				/>
			)
		})
	}, [collections, collectionId])

	return (
		<AccordionItem
			defaultOpen
			size='s'
			color='default'
			title='Collection'
		>
			{content}
		</AccordionItem>
	)
}
