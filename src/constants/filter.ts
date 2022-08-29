import isServer from '@utils/isServer'

export const PAGE = 'page'
export const LIMIT = 'limit'
export const COLLECTION_ID = 'collectionId'
export const MIN_PRICE = 'minPrice'
export const MAX_PRICE = 'maxPrice'
export const RARITIES = 'rarities'
export const TRAITS = 'traits'
export const FROM_DATE = 'fromDate'
export const TO_DATE = 'toDate'
export const UTILITIES = 'utilities'
export const DISTRIBUTIONS = 'distributions'
export const MERGEABLE = 'mergeable'
export const GENERATIVE = 'generative'
export const STATUS = 'status'
export const DROP_DATE_FROM = 'dropDateFrom'
export const DROP_DATE_TO = 'dropDateTo'
export const SEARCH = 'search'
export const SORT = 'sort'
export const ORDER = 'order'

export const ID = 'id'
export const SKIP = 'skip'
export const TAKE = 'take'
export const REDEEMABLE = 'redeemable'

function stringifyPage (value) {
	if (value <= 1) return ''
	return value.toString()
}

function stringifyLimit () {
	return ''
}

function toString (value) {
	return value.toString()
}

function stringifyArray (value) {
	if (value.length === 0) return
	return value.join(',')
}

function stringifyJSON (value) {
	try {
		if (Object.keys(value).length === 0) return null
		if (isServer()) {
			return Buffer.from(JSON.stringify(value)).toString('base64')
		} else {
			return window.btoa(JSON.stringify(value))
		}
	} catch (e) {
		console.log(e)
		return null
	}
}

export const stringifyConfig = {
	[ID]: toString,
	[PAGE]: stringifyPage,
  [LIMIT]: stringifyLimit,
  [COLLECTION_ID]: toString,
  [MIN_PRICE]: toString,
  [MAX_PRICE]: toString,
  [RARITIES]: stringifyArray,
  [TRAITS]: stringifyJSON,
  [FROM_DATE]: toString,
  [TO_DATE]: toString,
  [UTILITIES]: stringifyArray,
  [DISTRIBUTIONS]: stringifyArray,
  [MERGEABLE]: stringifyArray,
  [GENERATIVE]: stringifyArray,
  [STATUS]: stringifyArray,
  [DROP_DATE_FROM]: toString,
  [DROP_DATE_TO]: toString,
  [SEARCH]: toString,
  [SORT]: toString,
  [ORDER]: toString
}

function toNumber (value) {
	return +value
}

function toArray (value) {
	return value.split(',')
}

function toJSON (value) {
	try {
		if (isServer()) {
			return JSON.parse(Buffer.from(value, 'base64').toString('binary'))
		} else {
			return JSON.parse(window.atob(value))
		}
	} catch (e) {
		console.log(e)
		return {}
	}
}

export const parseConfig = {
	[ID]: toNumber,
	[PAGE]: toNumber,
  [LIMIT]: toNumber,
  [COLLECTION_ID]: toNumber,
  [MIN_PRICE]: toNumber,
  [MAX_PRICE]: toNumber,
  [RARITIES]: toArray,
  [TRAITS]: toJSON,
  [FROM_DATE]: toString,
  [TO_DATE]: toString,
  [UTILITIES]: toArray,
  [DISTRIBUTIONS]: toArray,
  [MERGEABLE]: toArray,
  [GENERATIVE]: toArray,
  [STATUS]: toArray,
  [DROP_DATE_FROM]: toString,
  [DROP_DATE_TO]: toString,
  [SEARCH]: toString,
  [SORT]: toString,
  [ORDER]: toString
}

export const normalizeConfig = {
	[ID]: toString,
	[PAGE]: stringifyPage,
	[SKIP]: toString,
	[TAKE]: toString,
  [LIMIT]: stringifyLimit,
  [COLLECTION_ID]: toString,
  [MIN_PRICE]: toString,
  [MAX_PRICE]: toString,
  [RARITIES]: stringifyArray,
  [TRAITS]: stringifyJSON,
  [FROM_DATE]: toString,
  [TO_DATE]: toString,
  [UTILITIES]: stringifyArray,
  [DISTRIBUTIONS]: stringifyArray,
  [MERGEABLE]: stringifyArray,
  [GENERATIVE]: stringifyArray,
  [STATUS]: stringifyArray,
  [DROP_DATE_FROM]: toString,
  [DROP_DATE_TO]: toString,
  [SEARCH]: toString,
  [SORT]: toString,
  [ORDER]: toString,
	[REDEEMABLE]: toString
}
