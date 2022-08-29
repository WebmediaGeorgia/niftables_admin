export const nftsOptions = [
  {
    value: 'price-high-to-low',
    label: 'Price high to low',
    sort: 'price',
    order: 'DESC',
  },
  {
    value: 'price-low-to-high',
    label: 'Price low to high',
    sort: 'price',
    order: 'ASC',
  },
  {
    value: 'rarity-score-low-to-high',
    label: 'Rarity score low to high',
    sort: 'rarityScore',
    order: 'ASC',
  },
  {
    value: 'rarity-score-high-to-low',
    label: 'Rarity score high to low',
    sort: 'rarityScore',
    order: 'DESC',
  },
  {
    value: 'latest-creation-date',
    label: 'Latest creation date',
    sort: 'createdAt',
    order: 'DESC',
  },
  {
    value: 'oldest-creation-date',
    label: 'Oldest creation date',
    sort: 'createdAt',
    order: 'ASC',
  },
  {
    value: 'most-liked',
    label: 'Most liked',
    sort: 'likesAmount',
    order: 'DESC',
  },
  {
    value: 'id-high-to-low',
    label: 'ID high to low',
    sort: 'id',
    order: 'DESC',
  },
  {
    value: 'id-low-to-high',
    label: 'ID low to high',
    sort: 'id',
    order: 'ASC',
  }
]

export const collectionsOptions = [
  {
    value: 'latest-drop-date',
    label: 'Latest drop date',
		sort: 'dropDate',
		order: 'DESC',
  },
  {
    value: 'oldest-drop-date',
    label: 'Oldest drop date',
		sort: 'dropDate',
		order: 'ASC',
  }
]

export const userNftsOptions = [
	{
    value: 'rarity-score-low-to-high',
    label: 'Rarity score low to high',
		sort: 'rarityScore',
		order: 'ASC',
  },
  {
    value: 'rarity-score-high-to-low',
    label: 'Rarity score high to low',
		sort: 'rarityScore',
		order: 'DESC',
  },
  {
    value: 'oldest-purchase-date',
    label: 'Oldest purchase date',
		sort: 'createdAt',
		order: 'ASC',
  },
  {
    value: 'latest-purchase-date',
    label: 'Latest purchase date',
		sort: 'createdAt',
		order: 'DESC',
  }
]
