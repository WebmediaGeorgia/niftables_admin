export const RESERVATION_NOT_FOUND = 'RESERVATION_NOT_FOUND'
export const RESERVATION_IS_NOT_ACTIVE = 'RESERVATION_IS_NOT_ACTIVE'
export const RESERVATION_EXPIRED = 'RESERVATION_EXPIRED'

export const RESERVATION_BLOCKED = 'RESERVATION_BLOCKED'
export const HAVE_ONLY_RESERVED = 'HAVE_ONLY_RESERVED'
export const SOLD_OUT = 'SOLD_OUT'
export const RATE_LIMIT = 'RATE_LIMIT'

export const INSUFFICIENT_FUNDS = 'INSUFFICIENT_FUNDS'
export const PURCHASE_FAILED = 'PURCHASE_FAILED'
export const NFT_NOT_FOUND = 'NFT_NOT_FOUND'
export const COLLECTION_NOT_FOUND = 'COLLECTION_NOT_FOUND'
export const ADDRESS_NOT_FOUND = 'ADDRESS_NOT_FOUND'
export const EXCEEDED_LIMIT_PER_USER = 'EXCEEDED_LIMIT_PER_USER'
export const NOT_ENOUGHT_SUPPLY = 'NOT_ENOUGHT_SUPPLY'

export const errorsConfig = {
	[INSUFFICIENT_FUNDS]: 'Insufficient funds! Please use another payment method or switch to another account',
	[PURCHASE_FAILED]: 'Crypto purchase failed! Please try again or use another payment method',
	[NFT_NOT_FOUND]: 'Not found. Please check if this token exists',
	[COLLECTION_NOT_FOUND]: 'Collection not found. Please check if this collection exists',
	[ADDRESS_NOT_FOUND]: 'Incorrect wallet address. Please check your web3 wallet account or try another one',
	[EXCEEDED_LIMIT_PER_USER]: 'Purchase limit exceeded. Please check your account limits or try another account',
	[NOT_ENOUGHT_SUPPLY]: 'Not enough available tokens. Please reduce the purchasing token amount'
}
