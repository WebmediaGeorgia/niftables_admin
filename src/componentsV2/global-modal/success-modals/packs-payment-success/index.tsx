// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import Link from 'next/link'
import get from 'lodash/get'

import { PACKS } from '@constants/payments'
import { PACKS_OPENING_LOADING } from '@constants/modals'

import styles from './PacksPaymentSuccess.module.scss'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { setModal, resetModal } from '@entities/modal/actions'

import Modal from '@commonV2/Modal'
import MediaPreview from '@commonV2/media-preview'
import Button from '@commonV2/Button'

export default function PacksPaymentSuccess () {
	const dispatch = useDispatch()
  const router = useRouter()
	const pack = useTypedSelector(state => get(state, 'modal.data', {}))

	const closeHandler = React.useCallback(() => {
		router.push(router.asPath, undefined, { scroll: false })
		dispatch(resetModal())
	}, [router, dispatch])

	const navigateToCollection = React.useCallback((e) => {
    e.preventDefault()
		router.push(`/collections/${pack.collection.id}`)
		dispatch(resetModal())
	}, [router, dispatch])

	const navigateToMyPacks = React.useCallback(() => {
    router.push(`/my-profile/my-packs`)
		dispatch(resetModal())
	}, [router, dispatch])

	const handleOpenPack = React.useCallback(() => {
		dispatch(setModal({ viewType: PACKS_OPENING_LOADING }))
	}, [dispatch])

	return (
		<Modal
			closeHandler={closeHandler}
			size='l'
		>
			<div className={styles.wrapper}>
				<div className={styles.media}>
					<MediaPreview
            data={pack}
            type={PACKS}
          />
				</div>
				<div className={styles.title}>Payment Success</div>
				<div className={styles.collection}>
					<div>NFT from</div>
					<Link
						href={`/collections/${pack.collection.id}`}
					>
						<a
							href={`/collections/${pack.collection.id}`}
							onClick={navigateToCollection}
						>
							{pack.collection.name}
						</a>
					</Link>
				</div>
				<Button
					className={styles.button}
					clickHandler={handleOpenPack}
				>
					Open now
				</Button>
				<Button
					className={styles.button}
					colorScheme='transparent'
					clickHandler={navigateToMyPacks}
				>
					View your Packs
				</Button>
			</div>
		</Modal>
	)
}
