// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'

import { mainCarouselSlides } from 'src/__mocks__/mainCarouselSlides'
import { MY_PACKS } from '@constants/my-profile'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { setIsGlobalLoading } from '@entities/utils/actions'
import { fetchUserPacks } from '@entities/user-packs/actions'

import QueryFilterListener from '@componentsV2/QueryFilterListener'
import { MainCarousel } from '@components/Carousels'
import NavigationTabs from '@componentsV2/NavigationTabs'
import MyPacksTab from './my-packs-tab'

import sanitizeUserPacksRequest from '@utils/filters/sanitizeUserPacksRequest'

export default function MyPacks () {
  const dispatch = useDispatch()
  const filter = useTypedSelector((state) => state.filter)


	React.useEffect(() => {
		const fetchFn = async () => {
      dispatch(setIsGlobalLoading(true))
      const data = sanitizeUserPacksRequest(filter)
      await dispatch(fetchUserPacks(data))
      dispatch(setIsGlobalLoading(false))
    }
    fetchFn()
  }, [filter])

	return (
		<>
			<QueryFilterListener />
      <MainCarousel slides={mainCarouselSlides} />
      <div className='g-mt-20'>
        <NavigationTabs activeTab={MY_PACKS} />
        <MyPacksTab />
      </div>
		</>
	)
}
