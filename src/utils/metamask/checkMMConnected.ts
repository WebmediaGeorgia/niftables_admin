import { ethers } from 'ethers'

import handleMetamaskError from './handleMetamaskError'

export default function checkMMConnected () {
	const provider = new ethers.providers.Web3Provider(window.ethereum)
	return provider
    .send('eth_requestAccounts', [])
    .then((res) => res[0])
    .catch((error) => {
      handleMetamaskError(error)
      return false;
    })
}