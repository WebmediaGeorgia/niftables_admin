import { ethers } from 'ethers'
import { toast } from 'react-toastify'

import handleMetamaskError from './handleMetamaskError'

export default function sendTransaction({ transactionParameters }) {
	const provider = new ethers.providers.Web3Provider(window.ethereum)
  return provider
    .send('eth_sendTransaction', [transactionParameters])
    .then((transactionHash) => {
      if (!transactionHash) {
        toast.error('Crypto purchase faild')
        return false;
      }
      return transactionHash;
    })
    .catch((error) => {
      handleMetamaskError(error)
      return false;
    })
}