import { NFT, PACKS } from '@constants/payments'

const config = {
	[NFT]: 'tokenId',
	[PACKS]: 'packId'
}

export default function getItemId ({ type, purchaseData }) {
	const field = config[type]
	if (!field) {
		console.warn(`Item with type: ${type} not implemented`)
		return 
	}
	return purchaseData[field]
}