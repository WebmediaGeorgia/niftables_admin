// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'

import { mainCarouselSlides } from 'src/__mocks__/mainCarouselSlides'
import { MY_PROFILE } from '@constants/my-profile'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { setIsGlobalLoading } from '@entities/utils/actions'
import { fetchUserNftTokens } from '@entities/user-nft-tokens/actions'
import { fetchUserPacks } from '@entities/user-packs/actions'

import { MainCarousel } from '@components/Carousels'
import NavigationTabs from '@componentsV2/NavigationTabs'
import MyProfileTab from './my-profile-tab'

export function MyProfile () {
	const dispatch = useDispatch()
  const filter = useTypedSelector((state) => state.filter)

	React.useEffect(() => {
		dispatch(setIsGlobalLoading(true))
		const nftsPromise = dispatch(fetchUserNftTokens({
			take: 1000,
			skip: 0,
			sort: 'id'
		}))
		const packsPromise = dispatch(fetchUserPacks({
			take: 1000,
			skip: 0,
			sort: 'id'
		}))
		Promise.all([nftsPromise, packsPromise]).finally(() => dispatch(setIsGlobalLoading(false)))
	}, [filter])

	return (
		<>
      <MainCarousel slides={mainCarouselSlides} />
			<div className='g-w-100 g-overflow-hidden g-mt-20'>
				<div className='g-w-100'>
					<NavigationTabs activeTab={MY_PROFILE} />
					<div>
						<div className='g-w-100'>
							<MyProfileTab />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
