// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { setIsGlobalLoading } from '@entities/utils/actions'
import { fetchRedeemNfts } from '@entities/redeem/actions'

import QueryFilterListener from '@componentsV2/QueryFilterListener'
import PaginationFilter from '@componentsV2/filters-block/pagination-filter'
import NftsSearch from './NftsSearch'
import RedeemList from './redeem-list'

import sanitizeUserRedeemNFTs from '@utils/filters/sanitizeUserRedeemNFTs'

export default function RedeemPage () {
  const dispatch = useDispatch()
  const filter = useTypedSelector((state) => state.filter)
  const scrollRef = React.useRef(null)

	React.useEffect(() => {
		const fetchFn = async () => {
      dispatch(setIsGlobalLoading(true))
			const data = sanitizeUserRedeemNFTs(filter)
      await dispatch(fetchRedeemNfts(data))
      dispatch(setIsGlobalLoading(false))
    }
    fetchFn()
	}, [filter])

  return (
    <>
			<QueryFilterListener />
      <StyledWrapper ref={scrollRef}>
        <div className='page-title'>
          NFTs with utilities
        </div>

        <div className='line' />

        <div className='content-wrapper g-container'>
          <NftsSearch />

          <RedeemList />

          <PaginationFilter
            scrollRef={scrollRef}
            field='redeem'
          />
        </div>
      </StyledWrapper>
    </>
  )
}

const StyledWrapper = styled.div`
  margin-top: 150px;
  .page-title {
    font-size: 48px;
    font-weight: 700;
    text-align: center;
    @media only screen and (max-width: 768px) {
      font-size: 30px;
    }
  }
  .line {
    width: 100%;
    height: 1px;
    margin-top: 60px;
    margin-bottom: 15px;
    max-width: 100%;
    background: rgba(255, 255, 255, 0.1);
  }
  .content-wrapper {
    @media only screen and (max-width: 768px) {
      max-width: 480px;
    }
  }
`
