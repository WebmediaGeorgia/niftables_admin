import { toast } from 'react-toastify'

import { $apiWithToken } from '@services/index'

export default function completeRedeem ({ tokenId, transactionHash }) {
  return $apiWithToken
    .post('/collections/nft-redeem-complete', { tokenId, transactionHash })
    .then(() => true)
    .catch(() => {
      toast.error('Redeem failed');
      return false
    })
}
