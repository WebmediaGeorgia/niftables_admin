// @ts-nocheck
import React from 'react'

import PaginationFilter from '@componentsV2/filters-block/pagination-filter'
import LikedSearchBlock from './LikedSearchBlock'
import LikedNftsList from './LikedNftsList'

export default function LikedNftsTab () {
  const scrollRef = React.useRef<HTMLDivElement>(null)

  return (
		<div className='g-container'>
			<div ref={scrollRef}>
				<LikedSearchBlock />
				<LikedNftsList />
			</div>

			<PaginationFilter
				scrollRef={scrollRef}
				field='likedNfts'
			/>
		</div>
  )
}
