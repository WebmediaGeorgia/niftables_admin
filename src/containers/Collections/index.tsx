// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { useNoInitialEffect } from '@hooks/useNoInitialEffect'
import { setIsGlobalLoading } from '@entities/utils/actions'
import { getCollectionsRequest } from '@entities/nft_collection/redux/actions'

import QueryFilterListener from '@componentsV2/QueryFilterListener'
import FiltersHeader from '@commonV2/FiltersHeader'
import PaginationFilter from '@componentsV2/filters-block/pagination-filter'
import CollectionsSearchBlock from './CollectionsSearchBlock'
import CollectionsList from './collections-list'
import CollectionsFilterBlock from './CollectionsFilterBlock'

import sanitizeCollectionsRequest from '@utils/filters/sanitizeCollectionsRequest'

export default function Collections () {
  const dispatch = useDispatch()
  const filter = useTypedSelector((state) => state.filter)

  const scrollRef = React.useRef<HTMLDivElement>(null)

  useNoInitialEffect(() => {
    const fetchFn = async () => {
      dispatch(setIsGlobalLoading(true))
      const data = sanitizeCollectionsRequest(filter)
      await dispatch(getCollectionsRequest(data))
      dispatch(setIsGlobalLoading(false))
    }
    fetchFn()
  }, [filter])

	return (
		<>
			<QueryFilterListener />
			<div>
				<FiltersHeader
					title='Collections'
					subTitile='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
				/>

				<div className='g-container'>
					<div ref={scrollRef}>
						<CollectionsSearchBlock />
            <div className='g-grid-wrapper'>
						  <CollectionsFilterBlock />
              <CollectionsList />
            </div>
					</div>

					<PaginationFilter
						scrollRef={scrollRef}
						field='nftCollection'
					/>
				</div>
			</div>
		</>
	)
}
