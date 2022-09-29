// @ts-nocheck
import React from 'react'
import { useRouter } from 'next/router'

import { useTypedSelector } from '@hooks/useNewTypedSelector'

import PlateGrid from '@commonV2/grids/PlateGrid'
import CollectionCard from '@commonV2/cards/collection-card'
import EmptyItems from '@commonV2/EmptyItems'
import {COLLECTIONS_PAGE} from "@constants/view-types";

export default function CollectionsList() {
  const router = useRouter();
	const list = useTypedSelector((state) => state.nftCollection.list);

	const navigateToCollectionNFTs = React.useCallback(id => {
		router.push(`/collections/${id}`)
	}, [router])

  if (list.length === 0) {
    return <EmptyItems withReset />
  }

  return (
    <PlateGrid page={COLLECTIONS_PAGE}>
      {list.map((collection) => {
        return (
          <CollectionCard
						key={collection.id}
            collection={collection}
            clickHandler={() => navigateToCollectionNFTs(collection.id)}
          />
        )
      })}
    </PlateGrid>
  )
}
