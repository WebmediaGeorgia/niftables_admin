import React from 'react'

import PaginationFilter from '@componentsV2/filters-block/pagination-filter'
import UserPacksList from './UserPacksList'

export default function MyPacksTab () {
  const scrollRef = React.useRef<HTMLDivElement>(null)
  return (
    <div className='g-container g-mt-30'>
      <div ref={scrollRef}>
        <UserPacksList />
      </div>
      <PaginationFilter
        scrollRef={scrollRef}
        field='userPacks'
      />
    </div>
  )
}
