// @ts-nocheck
import React from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { useNoInitialEffect } from '@hooks/useNoInitialEffect'
import { setIsGlobalLoading } from '@entities/utils/actions'
import { getCollectionNFTsRequest } from '@entities/nft/redux/actions'

import QueryFilterListener from '@componentsV2/QueryFilterListener'
import NftsSearchBlock from '@componentsV2/filters-block/NftsSearchBlock'
import PaginationFilter from '@componentsV2/filters-block/pagination-filter'
import CollectionNftsHeader from './collection-nfts-header'
import CollectionNftsFilterBlock from './CollectionNftsFilterBlock'
import NftsList from './NftsList'

import sanitizeCollectionNftsRequest from '@utils/filters/sanitizeCollectionNftsRequest'

export default function CollectionNfts () {
  const dispatch = useDispatch()
	const { query, push } = useRouter()
  const filter = useTypedSelector((state) => state.filter)
	const { collection, error } = useTypedSelector((state) => state.collection);

  const scrollRef = React.useRef(null)

	React.useEffect(() => {
		if (error === 'COLLECTION_NOT_FOUND') {
			push('/404');
		}
	}, [error]);

  useNoInitialEffect(() => {
    const fetchFn = async () => {
      dispatch(setIsGlobalLoading(true))
      const data = sanitizeCollectionNftsRequest({ ...filter, id: query.id })
      await dispatch(getCollectionNFTsRequest(data))
      dispatch(setIsGlobalLoading(false))
    }
    fetchFn()
  }, [filter])

	if (!collection) return null;

  return (
		<>
			<QueryFilterListener />
			<StyledWrapper>
				<CollectionNftsHeader />

				<div className='g-container'>
					<div ref={scrollRef}>
						<NftsSearchBlock />
            <div className='g-grid-wrapper'>
						  <CollectionNftsFilterBlock />
              <NftsList />
            </div>
					</div>

					<PaginationFilter
						scrollRef={scrollRef}
						field='nft'
					/>
				</div>
			</StyledWrapper>
		</>
  )
}

const StyledWrapper = styled.div`
  margin-top: 150px;
`
