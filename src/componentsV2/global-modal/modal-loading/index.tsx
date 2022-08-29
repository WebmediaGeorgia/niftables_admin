import React from 'react'

import styles from './ModalLoading.module.scss'

import Modal from '@commonV2/Modal'
import Loader from '@commonV2/Loader'

export default function ModalLoading ({ closeHandler }) {
	return (
		<Modal
			closeHandler={closeHandler}
			size='l'
		>
			<div className={styles['wrapper']}>
				<Loader />
			</div>
		</Modal>
	)
}
