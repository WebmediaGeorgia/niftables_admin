import { toast } from 'react-toastify'

import { NFT, PACKS } from '@constants/payments'
import { errorsConfig, PURCHASE_FAILED } from '@constants/payments-errors'

import { $apiWithToken } from '@services/index'

function completeNft ({ itemId, transactionHash, collectionId }) {
	return $apiWithToken
		.post(`collections/nft-crypto-purchase-complete`, {
      blockchainTokenId: itemId,
      transactionHash,
      collectionId
    })
}

function completePack ({ itemId, transactionHash }) {
	return $apiWithToken
		.post(`collections/pack-crypto-purchase-complete`, {
      packId: itemId,
      transactionHash
    })
}

const config = {
	[NFT]: completeNft,
	[PACKS]: completePack
}

export default function completeCryptoPurchase ({ type, itemId, transactionHash, collectionId }) {
	const completeFn = config[type]
	if (!completeFn) {
		console.warn(`Complete Crypto Purchase for type: ${type} not implemented`)
		toast.error(errorsConfig[PURCHASE_FAILED])
		return false
	}
	return completeFn({ itemId, transactionHash, collectionId })
		.then(() => true)
		.catch(error => {
			const message = errorsConfig[error.response.data.message] || errorsConfig[PURCHASE_FAILED]
			toast.error(message)
			return false
		})
}
