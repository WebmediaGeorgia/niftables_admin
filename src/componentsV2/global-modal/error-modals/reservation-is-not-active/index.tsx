import React from 'react'

import styles from '../../common/UtilityModal.module.scss'

import { _getStore } from 'src/storage/configureStore'
import useMoveToInitialView from '@hooks/modal/useMoveToInitialView'

import Modal from '@commonV2/Modal'
import HeadIcon from '../../common/HeadIcon'
import BackToBrowse from '../common/BackToBrowse'

export default function ReservationIsNotActive () {
	const moveToInitialView = useMoveToInitialView()

	return (
		<Modal
			closeHandler={moveToInitialView}
			size='l'
		>
			<div className={styles['wrapper']}>
				<HeadIcon type='cross' />
				<div className={styles['title']}>
					Unsuccessful!
				</div>
				<div className={styles['text']}>
					You can`t continue with this purchase, because you already in the process of purchasing
					another item. Please finish it first, and then start this purchase again.
				</div>
				<div className={styles['buttons-wrapper']}>
					<BackToBrowse />
				</div>
			</div>
		</Modal>
	)
}
