import { ethers } from 'ethers'

import handleMetamaskError from './handleMetamaskError'

export default function checkGas ({ transactionParameters }) {
	const provider = new ethers.providers.Web3Provider(window.ethereum)
  return provider
    .send('eth_estimateGas', [transactionParameters])
    .then(() => true)
    .catch((error) => {
      handleMetamaskError(error)
      return false
    })
}