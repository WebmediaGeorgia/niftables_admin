import React from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import cn from 'classnames'

import styles from '../../common/UtilityModal.module.scss'
import btnStyles from '@components/shared/Button/Button.module.scss'

import { resetModal } from '@entities/modal/actions'

import Modal from '@commonV2/Modal'
import ButtonV2 from '@commonV2/Button'
import Button from '@components/shared/Button'
import HeadIcon from '../../common/HeadIcon'
import classNames from "classnames";
import NavButton from "@shared/NavButton";
import classnames from "classnames";

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

  const backToBrowse = React.useCallback(() => {
    router.push('/buy')
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
          Your transaction is processing now.
					<br />
          You will be notified once NFT is minted to your wallet.
				</div>
				<div className={styles['buttons-wrapper']}>
					<Button
						className={cn(btnStyles['btn-login-primary'])}
						size='l'
						color='blue'
						fullWidth
						onClick={backToBrowse}
					>
            Back to browse
					</Button>

          <ButtonV2
            className={classnames('g-mt-20', styles.viewNFTsButton)}
            disabled={false}
            colorScheme='transparent'
            clickHandler={navigateToMyNfts}
          >
            View your NFTS
          </ButtonV2>
				</div>
			</div>
		</Modal>
  )
}
