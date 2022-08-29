import React from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import cn from 'classnames'

import styles from '../../common/UtilityModal.module.scss'
import btnStyles from '@components/shared/Button/Button.module.scss'

import { resetModal } from '@entities/modal/actions'

import Modal from '@commonV2/Modal'
import Button from '@components/shared/Button'
import HeadIcon from '../../common/HeadIcon'

export default function PaymentSuccess () {
	const dispatch = useDispatch()
  const router = useRouter()

	const closeHandler = React.useCallback(() => {
		router.push(router.asPath, undefined, { scroll: false })
		dispatch(resetModal())
	}, [router, dispatch])

	const navigateToMyNfts = React.useCallback(() => {
    router.push('/my-profile/my-nfts')
    dispatch(resetModal())
	}, [router])

  return (
		<Modal
			closeHandler={closeHandler}
			size='l'
		>
			<div className={styles['wrapper']}>
				<HeadIcon type='success' />
				<div className={styles['title']}>Thank you!</div>
				<div className={styles['text']}>
					Your payment was successful!
					<br />
					NFT minting may take several minutes to appear in your wallet.
				</div>
				<div className={styles['buttons-wrapper']}>
					<Button
						className={cn(btnStyles['btn-login-primary'])}
						size='l'
						color='blue'
						fullWidth
						onClick={closeHandler}
					>
						Back to NFT`s catalog
					</Button>
					<Button
						className={cn(
							btnStyles['btn-cancel'],
							styles['btn-go-profile'],
							'g-mt-20'
						)}
						size='l'
						color='blue'
						fillStyle
						fullWidth
						onClick={navigateToMyNfts}
					>
						View your NFTs
					</Button>
				</div>
			</div>
		</Modal>
  )
}
