// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { SwiperSlide } from 'swiper/react'

import { WITHDRAW_DETAILS } from '@constants/modals'
import { NFT } from '@constants/payments'

import styles from './MyProfileTab.module.scss'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { setModal } from '@entities/modal/actions'

import MyNftCard from '@commonV2/cards/my-nft-card'
import CardSection from './card-section'

export default function AllNfts () {
  const dispatch = useDispatch()
	const router = useRouter()
	const tokens = useTypedSelector((state) => state.userNftTokens.tokens)

	const navigateToAllNfts = React.useCallback(() => {
		router.push('/my-profile/my-nfts')
	}, [router])

  const openWithdrawDetails = React.useCallback((token) => {
    dispatch(setModal({
      isOpen: true,
			viewType: WITHDRAW_DETAILS,
      options: {
				type: NFT,
        initialPoint: WITHDRAW_DETAILS,
        actionPoint: WITHDRAW_DETAILS,
        token
			},
			data: token.nft
    }))
  }, [dispatch])

	if (!tokens || tokens.length === 0) return null

	return (
    <CardSection
      className={styles.section}
      total={tokens.length}
      description='Cool NFTs!'
      buttonLabel='See all NFTs'
      clickHandler={navigateToAllNfts}
    >
      {tokens.map(token => {
        return (
          <SwiperSlide key={token.id}>
            <MyNftCard
              className={styles.card}
              token={token}
              clickHandler={() => openWithdrawDetails(token)}
            />
          </SwiperSlide>
        )
      })}
    </CardSection>
	)
}
