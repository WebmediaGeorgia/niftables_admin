// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'

import { mainCarouselSlides } from 'src/__mocks__/mainCarouselSlides'
import { MY_PACKS } from '@constants/my-profile'

import styles from '@styles/page/Profile.module.scss'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { setIsGlobalLoading } from '@entities/utils/actions'
import { fetchUserPacks } from '@entities/user-packs/actions'

import QueryFilterListener from '@componentsV2/QueryFilterListener'
import { MainCarousel } from '@components/Carousels'
import NavigationTabs from '@componentsV2/NavigationTabs'
import PaginationFilter from '@componentsV2/filters-block/pagination-filter'
import UserPacksList from './user-packs-list'

import sanitizeUserPacksRequest from '@utils/filters/sanitizeUserPacksRequest'

export function MyPacks () {
  const dispatch = useDispatch()
  const filter = useTypedSelector((state) => state.filter)

  const scrollRef = React.useRef<HTMLDivElement>(null)

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
			<div className={styles.wrapper}>
				<div className='g-w-100'>
					<NavigationTabs activeTab={MY_PACKS} />
					<div>
						<div
							ref={scrollRef}
							className={styles['tab-content-wrapper']}
						>
							<UserPacksList />
							<PaginationFilter
								scrollRef={scrollRef}
								field='userPacks'
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
