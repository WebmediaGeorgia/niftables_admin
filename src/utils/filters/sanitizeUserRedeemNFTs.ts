
import { getOffset } from '@utils/pagination'
import normalizeFilters from '@utils/filters/normalizeFilters'

export default function sanitizeUserRedeemNFTs (filter) {
  const { page, limit, sort, order, collectionId, ...rest } = filter;
  return normalizeFilters({
		take: Number(6),
		skip: getOffset(Number(page || 1), Number(6)),
		sort: String(sort || 'id'),
		redeemable: true,
		...rest,
	})
}
