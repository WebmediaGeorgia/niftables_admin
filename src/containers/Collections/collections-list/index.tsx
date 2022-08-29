// @ts-nocheck
import React from 'react'
import { useRouter } from 'next/router'
import cn from 'classnames'

import { GRID_BIG } from '@constants/view-types'

import styles from './CollectionsList.module.scss'
import sGrid from '@styles/sGrid.module.scss'

import { useTypedSelector } from '@hooks/useNewTypedSelector'

import PlateGrid from '@commonV2/grids/PlateGrid'
import { CollectionCard } from '@components/Card/CollectionCard'
import EmptyItems from '@commonV2/EmptyItems'

export default function CollectionsList() {
  const router = useRouter();
  const isLarge = useTypedSelector((state) => state.utils.viewType === GRID_BIG)
	const list = useTypedSelector((state) => state.nftCollection.list);

	const navigateToCollectionNFTs = React.useCallback(item => {
		router.push(`/collections/${item.id}`)
	}, [router])

  if (list.length === 0) {
    return <EmptyItems withReset />
  }

  return (
    <PlateGrid>
      {list.map((collection) => {
        return (
          <CollectionCard
						key={collection.id}
            className={cn(styles['collection-item'], isLarge && sGrid.isLarge)}
            item={collection}
            isLarge={isLarge}
            onClick={navigateToCollectionNFTs}
          />
        )
      })}
    </PlateGrid>
  )
}
