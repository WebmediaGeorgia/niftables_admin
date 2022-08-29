import { DEFAULT_LIMIT } from '@constants/pagination'
import { collectionsOptions } from '@constants/drop-down-options'

import { getOffset } from '@utils/pagination'
import normalizeFilters from '@utils/filters/normalizeFilters'

export default function sanitizeCollectionsRequest (filter) {
	const { page, limit, sort, order, ...rest } = filter
	const initialOption = collectionsOptions[0]
  return normalizeFilters({
		take: Number(limit || DEFAULT_LIMIT),
		skip: getOffset(Number(page || 1), Number(limit || DEFAULT_LIMIT)),
		sort: String(sort || initialOption.sort),
    order: String(order || initialOption.order),
		...rest,
	})
}
