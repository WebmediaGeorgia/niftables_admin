// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import cn from 'classnames'

import { CHANGE_NETWORK } from '@constants/modals'

import styles from './AddNetwork.module.scss'
import btnStyles from '@components/shared/Button/Button.module.scss'

import { _getStore } from 'src/storage/configureStore'
import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { setModal } from '@entities/modal/actions'
import useMoveToReferrer from '@hooks/modal/useMoveToReferrer'

import Modal from '@commonV2/Modal'
import Button from '@shared/Button'
import ModalLoading from '../../modal-loading'

import fetchNetworkData from '@utils/metamask/fetchNetworkData'
import addMMNetwork from '@utils/metamask/addMMNetwork'

export default function AddNetwork () {
	const dispatch = useDispatch()
	const moveToReferrer = useMoveToReferrer()
  const name = useTypedSelector((state) => state.modal.data.collection.network.name)
  const [isLoading, setIsLoading] = React.useState(false)

	const handleAddNetwork = React.useCallback(async () => {
    setIsLoading(true)
    const id = _getStore().getState().modal.data.collection.network.id
    const network = await fetchNetworkData(id)
    if (!network) return setIsLoading(false)
		const isSuccess = await addMMNetwork(network)
		if (!isSuccess) return setIsLoading(false)
		dispatch(setModal({ viewType: CHANGE_NETWORK }))
	}, [dispatch, setIsLoading])

  if (isLoading) return <ModalLoading closeHandler={moveToReferrer} />

	return (
		<Modal
			closeHandler={moveToReferrer}
			size='l'
		>
			<div className={styles['wrapper']}>
				<div className={styles['title']}>
					You dont have {name} network
				</div>
				<div className={styles['text']}>
					In order to trade items, please add <b>{name}</b> network
					inside your Metamask wallet
				</div>
				<Button
					className={cn(btnStyles['btn-login-primary'], styles['button'])}
					size='l'
					color='blue'
					fillStyle
					onClick={handleAddNetwork}
				>
					Add network
				</Button>
			</div>
		</Modal>
	)
}
