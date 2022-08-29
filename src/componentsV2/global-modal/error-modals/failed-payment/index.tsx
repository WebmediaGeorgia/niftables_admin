// @ts-nocheck
import React from 'react'

import styles from '../../common/UtilityModal.module.scss'

import { _getStore } from 'src/storage/configureStore'
import useMoveToInitialView from '@hooks/modal/useMoveToInitialView'

import Modal from '@commonV2/Modal'
import HeadIcon from '../../common/HeadIcon'
import BackToBrowse from '../common/BackToBrowse'
import AnotherPaymentMethod from '../common/AnotherPaymentMethod'

export default function FailedPayment () {
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
					Payment fails!
				</div>
				<div className={styles['buttons-wrapper']}>
					<BackToBrowse />
					<AnotherPaymentMethod />
				</div>
			</div>
		</Modal>
	)
}
