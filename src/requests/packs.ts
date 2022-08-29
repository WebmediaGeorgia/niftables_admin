import { toast } from 'react-toastify'

import { $apiWithToken } from 'src/common/api'

export function openPack (packId) {
	return $apiWithToken
		.post('collections/pack/open', { packId })
		.then(({ data }) => data[0])
		.catch(() => {
			toast.error(`Open pack request failed`)
		})
}