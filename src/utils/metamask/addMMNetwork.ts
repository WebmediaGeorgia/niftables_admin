import { ethers } from 'ethers'

import handleMMErrors from './handleMetamaskError'

export default function addMMNetwork (network) {
  const {
    chainId, name, currencyName, currency, currencyDecimals, rpcUrls, blockchainExplorerUrls
  } = network
	const provider = new ethers.providers.Web3Provider(window.ethereum)
	const parsedNetwork = {
		chainId: ethers.utils.hexValue(+chainId),
		chainName: name,
		nativeCurrency: {
			name: currencyName,
			symbol: currency,
			decimals: currencyDecimals
		},
		rpcUrls,
		blockExplorerUrls: blockchainExplorerUrls
	}
	return provider
		.send('wallet_addEthereumChain', [parsedNetwork])
		.then(() => true)
		.catch((error) => {
			handleMMErrors(error)
			return false
		})
}
