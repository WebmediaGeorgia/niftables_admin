// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import cn from 'classnames'
import { toast } from 'react-toastify'

import { ADD_NETWORK } from '@constants/modals'

import styles from './ChangeNetwork.module.scss'
import btnStyles from '@components/shared/Button/Button.module.scss'

import { _getStore } from 'src/storage/configureStore'
import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { setModal } from '@entities/modal/actions'
import useMoveToActionPoint from '@hooks/modal/useMoveToActionPoint'
import useClearReservation from '@hooks/modal/useClearReservation'
import useMoveToReferrer from '@hooks/modal/useMoveToReferrer'

import Modal from '@commonV2/Modal'
import Button from '@shared/Button'

import getMMNetwork from '@utils/metamask/getMMNetwork'
import switchMMNetwork from '@utils/metamask/switchMMNetwork'

export default function ChangeNetwork () {
	const dispatch = useDispatch()
  const name = useTypedSelector((state) => state.modal.data.collection.network.name)
  const moveToActionPoint = useMoveToActionPoint()
	const clearReservation = useClearReservation()
	const moveToReferrer = useMoveToReferrer()

	React.useEffect(() => {
		async function init () {
			const chainId = _getStore().getState().modal.data.collection.network.chainId
			const providerNetwork = await getMMNetwork()
			if (chainId === providerNetwork.chainId) moveToReferrer()
		}
		init()
	})

  const closeHandler = React.useCallback(() => {
    moveToActionPoint()
    clearReservation()
  }, [moveToActionPoint, clearReservation])

	const changeNetwork = React.useCallback(async () => {
		const chainId = _getStore().getState().modal.data.collection.network.chainId
		if (!chainId) return toast.error(`Current item does not have chainId, contact support`)
		const providerNetwork = await getMMNetwork()
		if (chainId !== providerNetwork.chainId) {
			const [error] = await switchMMNetwork({ chainId })
			if (error) {
				if (error.code === 4902) return dispatch(setModal({ viewType: ADD_NETWORK }))
				return
			}
		}
		moveToReferrer()
  }, [dispatch, moveToReferrer])

  return (
		<Modal
			closeHandler={closeHandler}
			size='l'
		>
			<div className={styles['wrapper']}>
				<div className={styles['title']}>
					Please switch to <b>{name}</b> network
				</div>
				<div className={styles['text']}>
					In order to trade items, please switch to <b>{name}</b> network
					inside your Metamask wallet
				</div>
				<Button
					className={cn(btnStyles['btn-login-primary'], styles['button'])}
					size='l'
					color='blue'
					fillStyle
					onClick={changeNetwork}
				>
					Switch network
				</Button>
			</div>
		</Modal>
  )
}
