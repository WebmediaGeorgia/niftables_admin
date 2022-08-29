// @ts-nocheck
import { toast } from 'react-toastify'

import { _getStore } from 'src/storage/configureStore'
import { $apiWithToken } from 'src/common/api'
import { updateWallet } from '@entities/user/redux/actions'

import { setCookie } from '@utils/cookies'

export default function updateUserWallet ({ address }) {
	return $apiWithToken
		.put('users/address', { address })
		.then(() => {
			setCookie('user', JSON.stringify({ address }), 10)
			_getStore().dispatch(updateWallet(address))
			return true
		})
		.catch(() => {
			toast.error('Metamask send address request failed')
			return false
		})
}
