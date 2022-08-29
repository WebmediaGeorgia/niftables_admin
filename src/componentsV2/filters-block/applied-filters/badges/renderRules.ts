export function isPage ({ value }) {
	if (value <= 1) return false
	return true
}

export function isCollection ({ collection, selectedCollection }) {
	if (!selectedCollection) return false
	if (!collection) return false
	return true
}

export function isEmpty ({ value }) {
	if (!value) return false
	return true
}

export function isCheckboxGroup ({ value }) {
	if (value.length === 0) return false
	return true
}

export function isRarities ({ value, collection }) {
	if (!collection) return false
	if (!collection.rarities) return false
	if (collection.rarities.length === 0) return false
	if (value.length === 0) return false
	return true
}

export function isUtilities ({ value }) {
	if (value.length === 0) return false
	return true
}

export function isTraits ({ value }) {
	if (value.length === 0) return false
	return true
}