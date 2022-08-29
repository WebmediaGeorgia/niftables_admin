import { toast } from 'react-toastify'

import { $apiWithToken } from 'src/common/api'

export function reserveItem ({ type, referenceId }) {
	return $apiWithToken
		.post('reservations', { type, referenceId })
}

export function checkoutReservation ({ type, referenceId }) {
	return $apiWithToken
		.put('reservations', { type, referenceId })
}

export function fetchMyReservations () {
	return $apiWithToken
		.get('reservations/my')
}

export function cancelReservations () {
	return $apiWithToken
		.put('reservations/cancel')
		.catch(() => {
			toast.error(`Cancel reservations request failed`)
		})
}

export function fetchNftReservation (id) {
	return $apiWithToken
		.get('reservations/getByNft', { params: { id } })
}

export function fetchPackReservation (id) {
	return $apiWithToken
		.get('reservations/getByPack', { params: { id } })
}
