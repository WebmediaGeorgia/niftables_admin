// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'

import styles from './Redeem.module.scss'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { setIsGlobalLoading } from '@entities/utils/actions'
import { fetchRedeemNfts } from '@entities/redeem/actions'

import QueryFilterListener from '@componentsV2/QueryFilterListener'
import Container from '@components/shared/Container'
import PageHeader from '@components/shared/PageHeader'
import HrComponent from '@components/shared/HrComponent'
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
      <div
        ref={scrollRef}
        className={styles['general']}
      >
        <PageHeader className={styles['title']}>
          NFTs with utilities
        </PageHeader>

        <HrComponent
          className={styles['line']}
          height='1'
          color='light'
        />
        <Container className={styles['container']}>
          <NftsSearch />
          <RedeemList />

          <PaginationFilter
            scrollRef={scrollRef}
            field='redeem'
          />
        </Container>
      </div>
    </>
  )
}
