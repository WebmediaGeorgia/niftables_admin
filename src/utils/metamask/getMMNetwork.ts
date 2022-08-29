import { ethers } from 'ethers'

import handleMetamaskError from './handleMetamaskError'

export default function getMMNetwork () {
	const provider = new ethers.providers.Web3Provider(window.ethereum)
	return provider
		.getNetwork()
		.then((providerNetwork) => providerNetwork)
    .catch((error) => {
      handleMetamaskError(error)
      return false;
    })
}