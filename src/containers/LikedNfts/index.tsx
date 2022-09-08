// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'

import { mainCarouselSlides } from 'src/__mocks__/mainCarouselSlides'
import { LIKED_NFTS } from '@constants/my-profile'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { setIsGlobalLoading } from '@entities/utils/actions'
import { fetchLikedNfts } from '@entities/liked-nfts/actions'

import QueryFilterListener from '@componentsV2/QueryFilterListener'
import { MainCarousel } from '@components/Carousels'
import NavigationTabs from '@componentsV2/NavigationTabs'
import LikedNftsTab from './liked-nfts-tab'

import sanitizeLikedNftsRequest from '@utils/filters/sanitizeLikedNftsRequest'

export default function LikedNfts () {
	const dispatch = useDispatch()
  const filter = useTypedSelector((state) => state.filter)

	React.useEffect(() => {
		const fetchFn = async () => {
			dispatch(setIsGlobalLoading(true))
			const data = sanitizeLikedNftsRequest(filter)
			await dispatch(fetchLikedNfts(data))
			dispatch(setIsGlobalLoading(false))
		}
		fetchFn()
	}, [filter])

	return (
		<>
			<QueryFilterListener />
      <MainCarousel slides={mainCarouselSlides} />
			<div className='g-mt-20'>
        <NavigationTabs activeTab={LIKED_NFTS} />
        <LikedNftsTab />
			</div>
		</>
	)
}
