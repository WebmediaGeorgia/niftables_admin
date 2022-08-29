export default function isEmptyValue (value) {
	if (value === null) return true
	if (typeof value === 'undefined') return true
	if (value === '') return true
	return false
}