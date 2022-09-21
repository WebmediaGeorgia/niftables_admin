import { NFT, PACKS } from '@constants/payments'

const config = {
	[NFT]: 'NFT',
	[PACKS]: 'Pack'
}

export default function getEntityLabel (type) {
	const label = config[type]
	if (!label) {
		console.warn(`Entity label for type: ${type} not implemented`)
		return ''
	}
	return label
}
