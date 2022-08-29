// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import get from 'lodash/get'

import {
	RESERVATION_BLOCKED,
	HAVE_ONLY_RESERVED,
	SOLD_OUT,
  RATE_LIMIT
} from '@constants/payments-errors'
import {
	RESERVATION_BLOCKED as RESERVATION_BLOCKED_VIEW,
	RESERVED_BY_ANOTHER,
	ITEM_SOLD,
	FAILED_PAYMENT,
  RATE_LIMIT as RATE_LIMIT_VIEW
} from '@constants/modals'

import { _getStore } from 'src/storage/configureStore'
import { setModal, setModalOptions } from '@entities/modal/actions'
import useMoveToBuyOptions from '@hooks/modal/useMoveToBuyOptions'
import useMoveToBuyView from '@hooks/modal/useMoveToBuyView'
import { reserveItem } from '@requests/reservation'

import ModalLoading from '../../modal-loading'

const errorsConfig = {
	[RESERVATION_BLOCKED]: RESERVATION_BLOCKED_VIEW,
	[HAVE_ONLY_RESERVED]: RESERVED_BY_ANOTHER,
	[SOLD_OUT]: ITEM_SOLD,
  [RATE_LIMIT]: RATE_LIMIT_VIEW
}

export default function Reservation () {
	const dispatch = useDispatch()
	const moveToBuyOptions = useMoveToBuyOptions()
	const moveToBuyView = useMoveToBuyView()

	React.useEffect(() => {
		const type = _getStore().getState().modal.options.type
		const referenceId = _getStore().getState().modal.data.id
		reserveItem({ type, referenceId })
			.then(({ data }) => {
				dispatch(setModalOptions({ reservation: data }))
				moveToBuyView()
			})
			.catch((error) => {
				const message = get(error, 'response.data.message')
				const viewType = errorsConfig[message]
				if (!viewType) return dispatch(setModal({ viewType: FAILED_PAYMENT }))
				dispatch(setModal({ viewType }))
			})
	}, [dispatch])

  return <ModalLoading closeHandler={moveToBuyOptions} />
}
