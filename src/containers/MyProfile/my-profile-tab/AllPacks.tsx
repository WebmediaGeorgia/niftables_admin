// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { SwiperSlide } from 'swiper/react'

import { PACKS } from '@constants/payments'
import { OPEN_PACKS_DETAILS } from '@constants/modals'

import styles from './MyProfileTab.module.scss'

import { useTypedSelector } from '@hooks/useNewTypedSelector';
import { setModal } from '@entities/modal/actions'

import { PackCard } from '@components/pack/PackCard'
import CardSection from './card-section'

import { createPackFromToken } from '@utils/pack-utils'

export default function AllPacks () {
	const router = useRouter()
	const dispatch = useDispatch()
	const packs = useTypedSelector((state) => state.userPacks.packs)

	const navigateToAllPacks = React.useCallback(() => {
		router.push('/my-profile/my-packs')
	}, [router])

  const handleCardClick = React.useCallback((pack) => {
		dispatch(setModal({
			isOpen: true,
			viewType: OPEN_PACKS_DETAILS,
			options: {
				type: PACKS,
        initialPoint: OPEN_PACKS_DETAILS,
        actionPoint: OPEN_PACKS_DETAILS
			},
			data: pack
		}))
	}, [dispatch])

	if (!packs || packs.length === 0) return null

	return (
    <CardSection
      className={styles.section}
      total={packs.length}
      description='Unopened Packs'
      buttonLabel='Open now!'
      clickHandler={navigateToAllPacks}
    >
      {packs.map(pack => {
        return (
          <SwiperSlide key={pack.id}>
            <PackCard
              item={createPackFromToken(pack)}
              onCardClick={handleCardClick}
              onButtonClick={handleCardClick}
            />
          </SwiperSlide>
        )
      })}
    </CardSection>
	)
}
