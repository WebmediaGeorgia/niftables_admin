// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { useNoInitialEffect } from '@hooks/useNoInitialEffect'
import { setIsGlobalLoading } from '@entities/utils/actions'
import { fetchCollections, resetCollections } from '@entities/collections/actions'
import { getBuyNFTsRequest } from '@entities/nft/redux/actions'

import QueryFilterListener from '@componentsV2/QueryFilterListener'
import FiltersHeader from '@commonV2/FiltersHeader'
import NftsSearchBlock from '@componentsV2/filters-block/NftsSearchBlock'
import PaginationFilter from '@componentsV2/filters-block/pagination-filter'
import BuyFilterBlock from './BuyFilterBlock'
import NftsList from './NftsList'

import sanitizeBuyNFTsRequest from '@utils/filters/sanitizeBuyNFTsRequest'

export default function Buy () {
  const dispatch = useDispatch()
  const filter = useTypedSelector((state) => state.filter)

  const scrollRef = React.useRef(null)

	React.useEffect(() => {
		dispatch(fetchCollections({
			take: 1000,
			skip: 0,
			sort: 'name',
			status: 'AVAILABLE',
			distributions: 'FIXED_PRICE, AUCTION',
		}))
		return () => {
			dispatch(resetCollections())
		}
	}, [])

  useNoInitialEffect(() => {
    const fetchFn = async () => {
      dispatch(setIsGlobalLoading(true))
      const data = sanitizeBuyNFTsRequest(filter)
      await dispatch(getBuyNFTsRequest(data))
      dispatch(setIsGlobalLoading(false))
    }
    fetchFn()
  }, [filter])

  return (
		<>
			<QueryFilterListener />
			<StyledWrapper>
				<FiltersHeader
					title='Currently for sale'
					subTitile='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
				/>

				<div className='g-container'>
					<div ref={scrollRef}>
						<NftsSearchBlock />
            <div className='g-grid-wrapper'>
						  <BuyFilterBlock />
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
