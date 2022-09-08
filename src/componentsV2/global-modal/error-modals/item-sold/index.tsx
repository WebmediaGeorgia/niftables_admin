// @ts-nocheck
import React from 'react'

import styles from '../../common/UtilityModal.module.scss'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import useMoveToInitialView from '@hooks/modal/useMoveToInitialView'

import Modal from '@commonV2/Modal'
import HeadIcon from '../../common/HeadIcon'
import BackToBrowse from '../common/BackToBrowse'

import getEntityLabel from '@utils/entities/getEntityLabel'

export default function ItemSold () {
	const moveToInitialView = useMoveToInitialView()
	const type = useTypedSelector(state => state.modal.options.type)
	const label = getEntityLabel(type)

  return (
		<Modal
			closeHandler={moveToInitialView}
			size='l'
		>
			<div className={styles.wrapper}>
				<HeadIcon type='cross' />
				<div className={styles['title']}>
          Unsuccessful!
				</div>
				<div className={styles['text']}>
					All available {label}s are already sold
				</div>
				<div className={styles['buttons-wrapper']}>
					<BackToBrowse />
				</div>
			</div>
		</Modal>
  )
}
