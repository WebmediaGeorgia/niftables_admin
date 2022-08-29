// @ts-nocheck
import React from 'react'
import cn from 'classnames'

import styles from './LikedNFTsTab.module.scss'
import sGrid from '@styles/sGrid.module.scss'

import Container from '@components/shared/Container'

import PaginationFilter from '@componentsV2/filters-block/pagination-filter'
import LikedSearchBlock from './liked-search-block'
import LikedNftsList from './liked-nfts-list'

export default function LikedNftsTab () {
  const scrollRef = React.useRef<HTMLDivElement>(null)

  return (
		<Container className={styles.container}>
			<div ref={scrollRef}>
				<LikedSearchBlock />
				<div className={styles.wrapper}>
					<div className={cn(styles['nft-wrapper'], sGrid.list)}>
						<LikedNftsList />
					</div>
				</div>
			</div>

			<PaginationFilter
				scrollRef={scrollRef}
				field='likedNfts'
			/>
		</Container>
  )
}
