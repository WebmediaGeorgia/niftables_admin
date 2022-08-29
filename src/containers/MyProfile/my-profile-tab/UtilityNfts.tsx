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

import { Card } from '@components/Card'
import CardSection from './card-section'

import { createCardItemFromNFTToken } from '@utils/nftUtils'

export default function UtilityNfts () {
  const dispatch = useDispatch()
	const router = useRouter()
	const tokens = useTypedSelector((state) => {
		const tokens = state.userNftTokens.tokens
		if (!tokens) return tokens
		return tokens.filter(token => token.nft.utilityType)
	})

	const navigateToRedeem = React.useCallback(() => {
		router.push('/redeem')
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
      description='NFTs with Utility!'
      buttonLabel='View now!'
      clickHandler={navigateToRedeem}
    >
      {tokens.map(token => {
        return (
          <SwiperSlide key={token.id}>
            <Card
              className={styles.card}
              item={createCardItemFromNFTToken(token)}
              isNFTEntity
              isOwned
              onClick={() => openWithdrawDetails(token)}
            />
          </SwiperSlide>
        )
      })}
    </CardSection>
	)
}
