import { normalizeConfig } from '@constants/filter'

import isEmptyValue from '@utils/isEmptyValue'

export default function normalizeFilters (filter) {
	const normalizedFilters = {}
	Object.keys(normalizeConfig).forEach(key => {
		const value = filter[key]
		if (isEmptyValue(value)) return
		const stringifyFn = normalizeConfig[key]
		const parsedValue = stringifyFn(value)
		if (isEmptyValue(value)) return
		if (parsedValue === 'true,false' || parsedValue === 'false,true') return
		normalizedFilters[key] = parsedValue
	})
	return normalizedFilters
}
