// @ts-nocheck
import React from 'react'

import Wallet from 'public/other/wallet.svg'

import styles from './InstallWallet.module.scss'

import useMoveToInitialPoint from '@hooks/modal/useMoveToInitialPoint'
import useMoveToActionPoint from '@hooks/modal/useMoveToActionPoint'
import useClearReservation from '@hooks/modal/useClearReservation'

import Modal from '@commonV2/Modal'
import NavButton from '@shared/NavButton'

export default function InstallWallet () {
  const moveToInitialPoint = useMoveToInitialPoint()
  const moveToActionPoint = useMoveToActionPoint()
	const clearReservation = useClearReservation()

  const closeHandler = React.useCallback(() => {
    moveToInitialPoint()
    clearReservation()
  }, [moveToActionPoint, clearReservation])

  const actionHandler = React.useCallback(() => {
    moveToActionPoint()
    clearReservation()
  }, [moveToActionPoint, clearReservation])

  return (
    <Modal
			closeHandler={closeHandler}
			size='l'
		>
      <div className={styles.wrapper}>
        <div className={styles.media}>
          <Wallet className={styles['icon-wallet']} />
        </div>
        <div className={styles.title}>Connect wallet</div>
        <div className={styles.action}>
          <NavButton
            to='https://metamask.io/download/'
            target='_blank'
            size='m'
            color='blue'
            onClick={actionHandler}
          >
            Install Metamask
          </NavButton>
        </div>
      </div>
    </Modal>
  )
}
