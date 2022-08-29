import { toast } from 'react-toastify'

import { $apiWithToken } from '@services/index'

export default function fetchNetworkData (id) {
  return $apiWithToken
    .get(`/networks/${id}`)
    .then(({ data }) => data)
    .catch(() => {
			toast.error('Fetch network data failed')
			return false
		})
}
