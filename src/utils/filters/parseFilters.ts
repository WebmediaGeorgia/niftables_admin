import { parseConfig } from '@constants/filter'

export default function parseFilters (filter) {
	const parsedFilters = {}
	Object.keys(parseConfig).forEach(key => {
		const value = filter[key]
		if (!value) return
		const parseFn = parseConfig[key]
		parsedFilters[key] = parseFn(value)
	})
	return parsedFilters
}
