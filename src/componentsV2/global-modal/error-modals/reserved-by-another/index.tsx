// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'

import { FAILED_PAYMENT } from '@constants/modals'
import { NFT, PACKS } from '@constants/payments'

import styles from '../../common/UtilityModal.module.scss'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { setModal } from '@entities/modal/actions'
import useMoveToInitialView from '@hooks/modal/useMoveToInitialView'
import { fetchNftReservation, fetchPackReservation } from '@requests/reservation'

import Modal from '@commonV2/Modal'
import ReservationTimer from '@commonV2/ReservationTimer'
import HeadIcon from '../../common/HeadIcon'
import ModalLoading from '../../modal-loading'
import BackToBrowse from '../common/BackToBrowse'

import getEntityLabel from '@utils/entities/getEntityLabel'

const config = {
	[NFT]: fetchNftReservation,
	[PACKS]: fetchPackReservation
}

function getFetchPromise ({ type, id }) {
	const fetchPromiseFn = config[type]
	if (!fetchPromiseFn) {
		console.warn(`Fetch resetvation by type: ${type} not implemented`)
		return
	}
	return fetchPromiseFn(id)
}

export default function ReservedByAnother () {
	const dispatch = useDispatch()
	const moveToInitialView = useMoveToInitialView()
	const type = useTypedSelector(state => state.modal.options.type)
	const id = useTypedSelector(state => state.modal.data.id)
	const [data, setData] = React.useState()
	const label = getEntityLabel(type)

	React.useEffect(() => {
		getFetchPromise({ type, id })
			.then(({ data }) => setData(data))
			.catch(() => {
				dispatch(setModal({ viewType: FAILED_PAYMENT }))
			})
	}, [type, id])

	if (!data) return <ModalLoading closeHandler={moveToInitialView} />

  return (
		<Modal
			closeHandler={moveToInitialView}
			size='l'
		>
			<div className={styles['wrapper']}>
				<HeadIcon type='lock' />
				<div className={styles['title']}>
					Reserved!
				</div>
				<ReservationTimer
					className='timer g-mt-5'
					endDate={data.expiredAt}
				/>
				<div className={styles['text']}>
					Another user pays for this {label}, if he does not buy after the
					time expired, you can buy it
				</div>
				<div className={styles['text']}>
					Good luck!
				</div>
				<div className={styles['buttons-wrapper']}>
					<BackToBrowse />
				</div>
			</div>
		</Modal>
  )
}
