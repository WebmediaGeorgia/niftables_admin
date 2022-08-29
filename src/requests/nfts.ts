import { toast } from 'react-toastify'

import { $apiWithToken } from 'src/common/api'

export function likeNft ({ id, like }) {
  return $apiWithToken
    .put('/collections/like', { id, like })
    .then(({ data }) => data)
    .catch(() => {
      toast.error(`Like nft request failed`)
      return false
    })
}

export function claimNft ({ tokenIds }) {
  return $apiWithToken
    .post(`collections/nft-claim`, { tokenIds })
    .then(() => true)
    .catch(() => {
      return false
    })
}


export function redeemNftUtility ({ tokenId }) {
  return $apiWithToken
    .post('/collections/redeem-nft-utility', { tokenId })
    .then(() => true)
    .catch(() => {
      return false
    })
}
