import { stringifyConfig } from '@constants/filter'

export default function stringifyFilters (filter) {
	const query = {}
	Object.keys(stringifyConfig).forEach(key => {
		const value = filter[key]
		if (!value) return
		const stringifyFn = stringifyConfig[key]
		const parsedValue = stringifyFn(value)
		if (!parsedValue) return
		query[key] = parsedValue
	})
	return query
}