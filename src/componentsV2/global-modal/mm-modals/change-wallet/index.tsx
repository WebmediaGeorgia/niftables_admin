// @ts-nocheck
import React from 'react'
import { toast } from 'react-toastify'
import cn from 'classnames'

import styles from './ChangeWallet.module.scss'

import { _getStore } from 'src/storage/configureStore';
import { useTypedSelector } from '@hooks/useNewTypedSelector'
import useMoveToActionPoint from '@hooks/modal/useMoveToActionPoint'
import useClearReservation from '@hooks/modal/useClearReservation'
import useMoveToReferrer from '@hooks/modal/useMoveToReferrer'

import Modal from '@commonV2/Modal'
import Button from '@commonV2/Button'

import formatAddress from '@utils/metamask/formatAddress'
import checkMMConnected from '@utils/metamask/checkMMConnected'
import updateUserWallet from '@utils/metamask/updateUserWallet'

export default function ChangeWallet () {
	const currentAddress = useTypedSelector(state => state.user.metamaskAddress)
  const moveToActionPoint = useMoveToActionPoint()
	const clearReservation = useClearReservation()
	const moveToReferrer = useMoveToReferrer()
	const [MMAdress, setMMAdress] = React.useState('')

	React.useEffect(() => {
		async function init () {
			const address = await checkMMConnected()
			setMMAdress(address)
		}
		init()
	}, [])

	React.useEffect(() => {
		function listenFn (accounts) {
			setMMAdress(accounts[0])
		}
		if (window.ethereum) {
			window.ethereum.on('accountsChanged', listenFn)
			return () => {
				window.ethereum.removeListener('accountsChanged', listenFn)
			}
		}
	}, [])

  const closeHandler = React.useCallback(() => {
    moveToActionPoint()
    clearReservation()
  }, [moveToActionPoint, clearReservation])

	const checkAddressMatch = React.useCallback(async () => {
		const currentAddress = _getStore().getState().user.metamaskAddress
		const MMAddress = await checkMMConnected()
		if (currentAddress !== MMAddress) {
			toast.error('Linked account and current MetaMask account does not match')
			return
		}
		moveToReferrer()
	}, [moveToReferrer])

	const linkAddress = React.useCallback(async () => {
		const MMAddress = await checkMMConnected()
		const isSuccess = await updateUserWallet({ address: MMAddress })
		if (!isSuccess) return
		moveToReferrer()
	}, [moveToReferrer])

	return (
		<Modal
			closeHandler={closeHandler}
			size='l'
		>
			<div className={styles['title']}>
				Wrong Metamask account!
			</div>
			<div className={styles['wrapper']}>
				<div className={styles['col']}>
					<div className={styles['text']}>
						Activate account <b>${formatAddress(currentAddress)}</b>
					</div>
					<div className={styles['text']}>
						in MetaMask and press button below
					</div>

          <Button className="g-mt-20" clickHandler={checkAddressMatch}>
            Try now
          </Button>
				</div>
				<div className={cn(styles['separator'], styles['text'])}>
					<b>or</b>
				</div>
				<div className={styles['col']}>
					<div className={styles['text']}>
						Link account <b>${formatAddress(MMAdress)}</b>
					</div>
					<div className={styles['text']}>
						in our system
					</div>

          <Button className="g-mt-20" clickHandler={linkAddress}>
            Link account
          </Button>
				</div>
			</div>
		</Modal>
	)
}
