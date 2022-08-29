// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'

import { mainCarouselSlides } from 'src/__mocks__/mainCarouselSlides'
import { LIKED_NFTS } from '@constants/my-profile'

import styles from '@styles/page/Profile.module.scss'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { setIsGlobalLoading } from '@entities/utils/actions'
import { fetchLikedNfts } from '@entities/liked-nfts/actions'

import QueryFilterListener from '@componentsV2/QueryFilterListener'
import { MainCarousel } from '@components/Carousels'
import NavigationTabs from '@componentsV2/NavigationTabs'
import LikedNftsTab from './liked-nfts-tab'

import sanitizeLikedNftsRequest from '@utils/filters/sanitizeLikedNftsRequest'

export function LikedNfts () {
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
			<div className={styles.wrapper}>
				<div className='g-w-100'>
					<div>
						<NavigationTabs activeTab={LIKED_NFTS} />
						<div className={styles['tab-content-wrapper']}>
							<LikedNftsTab />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
