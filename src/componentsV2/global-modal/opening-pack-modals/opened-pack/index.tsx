// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import get from 'lodash/get'

import { NFT } from '@constants/payments'
import { OPENED_NFT_DETAILS } from '@constants/modals'

import styles from './OpenedPack.module.scss'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { setModal, resetModal } from '@entities/modal/actions'

import Modal from '@commonV2/Modal'
import MediaPreview from '@commonV2/media-preview'
import Sticker from '@shared/Sticker'
import Badge from '@shared/Badge'
import Button from '@shared/Button'

export default function OpenedPack () {
	const dispatch = useDispatch()
  const router = useRouter()
	const token = useTypedSelector(state => get(state, 'modal.options.revealedNft', {}))
	const nft = useTypedSelector(state => get(state, 'modal.options.revealedNft.nft', {}))

	const closeHandler = React.useCallback(() => {
		router.push(router.asPath, undefined, { scroll: false })
		dispatch(resetModal())
	}, [router, dispatch])

	const navigateToMyNfts = React.useCallback(() => {
    dispatch(setModal({
      viewType: OPENED_NFT_DETAILS,
      options: {
        type: NFT,
        initialPoint: OPENED_NFT_DETAILS,
        actionPoint: OPENED_NFT_DETAILS,
        token
      },
      data: nft
    }))
	}, [dispatch, token, nft])

	return (
		<Modal
			closeHandler={closeHandler}
			size='l'
		>
			<div className={styles.wrapper}>
				<div className={styles['new-nft']}>Your new NFT!</div>
				<div className={styles['image-wrapper']}>
					{nft.rarity && (
						<Sticker className={styles.sticker}>
							{nft.rarity}
						</Sticker>
					)}
					<MediaPreview
             data={nft}
             type={NFT}
          />
				</div>
				<div className={styles.title}>
					{nft.name}
				</div>
				<div className={styles.badges}>
					{nft.rarity && (
						<Badge rounded color='secondary' size='m'>
							{nft.rarity}
						</Badge>
					)}
					{nft.utilityType && (
						<Badge rounded color='secondary' size='m'>
							{nft.utilityType}
						</Badge>
					)}
					{nft.mergeable && (
						<Badge rounded color='secondary' size='m'>
							Mergeable
						</Badge>
					)}
				</div>
				<Button
					className={styles.button}
					size='s'
					color='blue'
					onClick={navigateToMyNfts}
				>
					Go to NFT
				</Button>
			</div>
		</Modal>
	)
}
