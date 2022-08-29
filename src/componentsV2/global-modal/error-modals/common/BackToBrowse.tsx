import React from 'react'
import { useDispatch } from 'react-redux'

import btnStyles from '@components/shared/Button/Button.module.scss'

import { resetModal } from '@entities/modal/actions'
import { cancelReservations } from '@requests/reservation'

import Button from '@components/shared/Button'

export default function BackToBrowse () {
	const dispatch = useDispatch()

	const closeModal = React.useCallback(() => {
		dispatch(resetModal())
		cancelReservations()
	}, [dispatch])

	return (
		<Button
			className={btnStyles['btn-login-primary']}
			size='l'
			color='blue'
			fullWidth
			onClick={closeModal}
		>
			Back to browse
		</Button>
	)
}
