import { toast } from 'react-toastify'

import { $apiWithToken } from '@services/index'

export default function fetchRedeemData (tokenId) {
  return $apiWithToken
    .get(`/collections/nft-redeem/${tokenId}`)
    .then(({ data }) => data)
    .catch((error) => {
      const message = error?.response?.data?.message;
      if (message === 'Insufficient funds') {
        toast.error('Insufficient funds');
      } else {
        toast.error('Crypto purchase faild');
      }
      return false;
    });
}
