import { ethers } from 'ethers'

import handleMMErrors from './handleMetamaskError'

export default function switchMMNetwork ({ chainId }) {
	const provider = new ethers.providers.Web3Provider(window.ethereum);
	return provider
		.send('wallet_switchEthereumChain', [{ chainId: ethers.utils.hexValue(+chainId) }])
		.then(() => [null, true])
		.catch((error) => {
			handleMMErrors(error)
			return [error, null]
		})
}
