// @ts-nocheck
import React from 'react'

import MetamaskFox from 'public/other/metamask_fox.svg'

import styles from './ConnectWallet.module.scss'
import btnStyles from '@components/shared/Button/Button.module.scss'

import { _getStore } from 'src/storage/configureStore'
import useMoveToActionPoint from '@hooks/modal/useMoveToActionPoint'
import useMoveToReferrer from '@hooks/modal/useMoveToReferrer'
import useClearReservation from '@hooks/modal/useClearReservation'

import MMAnimation from '@commonV2/MMAnimation'
import Modal from '@commonV2/Modal'
import Button from '@shared/Button'
import HeadIcon from '../../common/HeadIcon'

import checkMMConnected from '@utils/metamask/checkMMConnected'
import updateUserWallet from '@utils/metamask/updateUserWallet'

export default function ConnectWallet () {
  const moveToActionPoint = useMoveToActionPoint()
	const clearReservation = useClearReservation()
	const moveToReferrer = useMoveToReferrer()

  const closeHandler = React.useCallback(() => {
    moveToActionPoint()
    clearReservation()
  }, [moveToActionPoint, clearReservation])

  const handleConnect = React.useCallback(async () => {
    const MMAddress = await checkMMConnected()
    if (!MMAddress) return
    let currentAddress = _getStore().getState().user.metamaskAddress
		if (!currentAddress) await updateUserWallet({ address: MMAddress })
		currentAddress = _getStore().getState().user.metamaskAddress
		if (!currentAddress) return
		moveToReferrer()
  }, [moveToReferrer])

  return (
    <Modal
			closeHandler={closeHandler}
			size='l'
		>
      <div className={styles.wrapper}>
        <div className={styles['media-wrapper']}>
          <HeadIcon type='wallet' />
        </div>
        <div className={styles.title}>Connect wallet</div>
        <div className={styles.action}>
          <Button
            size='s'
            className={btnStyles['btn-connect']}
            onClick={handleConnect}
          >
            <div
							id='logo-container'
							className={styles.logoContainer}
						>
              <span>Connect</span>
              <span className={styles['metamask-text']}>
								METAMASK
							</span>
              <MetamaskFox />
            </div>
          </Button>
        </div>
      </div>
			<MMAnimation />
    </Modal>
  )
}
