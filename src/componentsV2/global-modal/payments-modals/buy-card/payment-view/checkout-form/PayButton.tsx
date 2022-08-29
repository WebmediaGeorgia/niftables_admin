// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import get from 'lodash/get'

import {
	RESERVATION_NOT_FOUND,
	RESERVATION_IS_NOT_ACTIVE,
	RESERVATION_EXPIRED
} from '@constants/payments-errors'
import {
	FAILED_PAYMENT,
	RESERVATION_IS_NOT_ACTIVE as RESERVATION_IS_NOT_ACTIVE_VIEW,
	RESERVATION_EXPIRED as RESERVATION_EXPIRED_VIEW
} from '@constants/modals'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { setModal, setModalOptions } from '@entities/modal/actions'
import useMoveToSuccessView from '@hooks/modal/useMoveToSuccessView'
import { checkoutReservation } from '@requests/reservation'

import Button from '@commonV2/Button'

const errorsConfig = {
	[RESERVATION_NOT_FOUND]: FAILED_PAYMENT,
	[RESERVATION_IS_NOT_ACTIVE]: RESERVATION_IS_NOT_ACTIVE_VIEW,
	[RESERVATION_EXPIRED]: RESERVATION_EXPIRED_VIEW
}

export default function PayButton ({
  stripe, elements, termsAccepted, isLoading, setIsLoading
}) {
  const dispatch = useDispatch()
	const referenceId = useTypedSelector(state => get(state, 'modal.data.id'))
	const type = useTypedSelector(state => get(state, 'modal.options.type'))
	const moveToSuccessView = useMoveToSuccessView()

  const handleSubmit = React.useCallback(() => {
		setIsLoading(true)
		checkoutReservation({ type, referenceId })
			.then(({ data }) => {
				dispatch(setModalOptions({ reservation: data }))
				return stripe.confirmPayment({
					elements,
					confirmParams: {},
					redirect: 'if_required',
				})
			})
			.then(({ error, paymentIntent }) => {
				if (error) {
					return dispatch(setModal({ viewType: FAILED_PAYMENT }))
				}
				moveToSuccessView()
			})
			.catch((error) => {
				const message = get(error, 'response.data.message')
				const viewType = errorsConfig[message]
				if (!viewType) return dispatch(setModal({ viewType: FAILED_PAYMENT }))
				dispatch(setModal({ viewType }))
			})
  }, [setIsLoading, dispatch, type, referenceId, stripe, elements, moveToSuccessView])

  return (
    <Button
      disabled={!stripe || !termsAccepted || isLoading}
      clickHandler={handleSubmit}
    >
      Pay
    </Button>
  )
}
