import { DEFAULT_LIMIT } from '@constants/pagination'
import { nftsOptions } from '@constants/drop-down-options'

import { getOffset } from '@utils/pagination'
import normalizeFilters from '@utils/filters/normalizeFilters'

export default function sanitizeLikedNftsRequest (filter) {
  const { page, limit, sort, order, ...rest } = filter;
	const initialOption = nftsOptions[0]
  return normalizeFilters({
    take: Number(limit || DEFAULT_LIMIT),
    skip: getOffset(Number(page || 1), Number(limit || DEFAULT_LIMIT)),
    sort: 'Nft.' + String(sort || initialOption.sort),
    order: String(order || initialOption.order),
    ...rest,
  })
}
