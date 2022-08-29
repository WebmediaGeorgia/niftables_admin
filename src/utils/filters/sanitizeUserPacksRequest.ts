import { DEFAULT_LIMIT } from '@constants/pagination'

import { getOffset } from '@utils/pagination'
import normalizeFilters from '@utils/filters/normalizeFilters'

export default function sanitizeUserPacksRequest (filter) {
  const { page, limit, sort, order, collectionId, ...rest } = filter;
  return normalizeFilters({
    take: Number(limit || DEFAULT_LIMIT),
    skip: getOffset(Number(page || 1), Number(limit || DEFAULT_LIMIT)),
    sort: 'id',
    ...rest,
  })
}
