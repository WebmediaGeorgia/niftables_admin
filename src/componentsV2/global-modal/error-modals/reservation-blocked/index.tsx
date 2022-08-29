// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'

import { FAILED_PAYMENT } from '@constants/modals'

import styles from '../../common/UtilityModal.module.scss'

import { setModal } from '@entities/modal/actions'
import useMoveToInitialView from '@hooks/modal/useMoveToInitialView'
import { fetchMyReservations } from '@requests/reservation'

import Modal from '@commonV2/Modal'
import ReservationTimer from '@commonV2/ReservationTimer'
import ModalLoading from '../../modal-loading'
import HeadIcon from '../../common/HeadIcon'
import BackToBrowse from '../common/BackToBrowse'

export default function ReservationBlocked () {
	const dispatch = useDispatch()
	const moveToInitialView = useMoveToInitialView()
	const [data, setData] = React.useState()

	React.useEffect(() => {
		fetchMyReservations()
			.then(({ data }) => setData(data))
			.catch(() => {
				dispatch(setModal({ viewType: FAILED_PAYMENT }))
			})
	}, [])

	if (!data) return <ModalLoading closeHandler={moveToInitialView} />

  return (
		<Modal
			closeHandler={moveToInitialView}
			size='l'
		>
			<div className={styles['wrapper']}>
				<HeadIcon type='cross' />
				<div className={styles['title']}>
					Blocked!
				</div>
				<ReservationTimer
					className='timer g-mt-20'
					endDate={data.blockedTo}
				/>
				<div className={styles['text']}>
					You have made {data.tries} unsuccessful purchases in a row, purchases
					with fiat and crypto are blocked
				</div>
				<div className={styles['buttons-wrapper']}>
					<BackToBrowse />
				</div>
			</div>
		</Modal>
  )
}
