// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import get from 'lodash/get'

import { PACKS } from '@constants/payments'

import styles from './OpenPacksDetails.module.scss'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { resetModal } from '@entities/modal/actions'

import Modal from '@commonV2/Modal'
import MediaPreview from '@commonV2/media-preview'
import DetailInfo from './detail-info'
import PackContains from './pack-contains'

export default function OpenPacksDetails () {
	const dispatch = useDispatch()
	const pack = useTypedSelector(state => get(state, 'modal.data', {}))

	const closeHandler = React.useCallback(() => {
		dispatch(resetModal())
	}, [dispatch])

	return (
		<Modal
			closeHandler={closeHandler}
			size='l'
		>
			<div className={styles.general}>
				<div className={styles.main}>
					<div className={styles.media}>
						<MediaPreview
              data={pack}
              type={PACKS}
            />
					</div>

					<div className={styles['info-block']}>
						<DetailInfo />
					</div>
				</div>

				<div className={styles['description-block']}>
					<div className={styles['description-block-header']}>Description</div>
					<div className={styles['description-block-body']}>
						{pack.description}
					</div>
					<PackContains />
				</div>
			</div>
		</Modal>
	)
}
