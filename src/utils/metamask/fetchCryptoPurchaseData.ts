import { toast } from 'react-toastify'

import { NFT, PACKS } from '@constants/payments'
import { errorsConfig, PURCHASE_FAILED } from '@constants/payments-errors'

import { $apiWithToken } from '@services/index'

function fetchNftData (id) {
	return $apiWithToken
		.get(`/collections/nft-crypto-purchase/${id}`)
}

function fetchPackData (id) {
	return $apiWithToken
		.get(`/collections/pack-crypto-purchase/${id}`)
}

const config = {
	[NFT]: fetchNftData,
	[PACKS]: fetchPackData
}

export default function fetchCryptoPurchaseData ({ type, id }) {
	const fetchFn = config[type]
	if (!fetchFn) {
		console.warn(`Fetch data for type: ${type} not implemented`)
		toast.error(errorsConfig[PURCHASE_FAILED])
		return false
	}
	return fetchFn(id)
		.then(({ data }) => data)
		.catch(error => {
			const message = errorsConfig[error.response.data.message] || errorsConfig[PURCHASE_FAILED]
			toast.error(message)
			return false
		})
}
