// @ts-nocheck
import React from 'react'

import ProfileSearchBlock from './ProfileSearchBlock'
import ProfileFilterBlock from './ProfileFilterBlock'

import PaginationFilter from '@componentsV2/filters-block/pagination-filter'
import UserNftsList from './UserNftsList'

export default function MyNftsTab () {
  const scrollRef = React.useRef<HTMLDivElement>(null)
  return (
		<div className='g-container'>
			<div ref={scrollRef}>
				<ProfileSearchBlock />
        <div className='g-grid-wrapper'>
				  <ProfileFilterBlock />
				  <UserNftsList />
        </div>
			</div>

			<PaginationFilter
				scrollRef={scrollRef}
				field='userNftTokens'
			/>
		</div>
  )
}
