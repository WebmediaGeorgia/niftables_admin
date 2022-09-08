// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'

import { mainCarouselSlides } from 'src/__mocks__/mainCarouselSlides'
import { MY_NFTS } from '@constants/my-profile'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { setIsGlobalLoading } from '@entities/utils/actions'
import { fetchCollections, resetCollections } from '@entities/collections/actions'
import { fetchUserNftTokens } from '@entities/user-nft-tokens/actions'

import QueryFilterListener from '@componentsV2/QueryFilterListener'
import { MainCarousel } from '@components/Carousels'
import NavigationTabs from '@componentsV2/NavigationTabs'
import MyNftsTab from './my-nfts-tab'

import sanitizeUserNFTsRequest from '@utils/filters/sanitizeUserNFTsRequest'

export default function MyNfts () {
	const dispatch = useDispatch()
  const filter = useTypedSelector((state) => state.filter)

	React.useEffect(() => {
		dispatch(fetchCollections({
			take: 1000,
			skip: 0,
			sort: 'name',
			owned: true
		}))
		return () => {
			dispatch(resetCollections())
		}
	}, [])

  React.useEffect(() => {
    const fetchFn = async () => {
      dispatch(setIsGlobalLoading(true))
      const data = sanitizeUserNFTsRequest(filter)
      await dispatch(fetchUserNftTokens(data))
      dispatch(setIsGlobalLoading(false))
    }
    fetchFn()
  }, [filter])

	return (
		<>
			<QueryFilterListener />
      <MainCarousel slides={mainCarouselSlides} />
			<div className='g-mt-20'>
        <NavigationTabs activeTab={MY_NFTS} />
        <MyNftsTab />
			</div>
		</>
	)
}
