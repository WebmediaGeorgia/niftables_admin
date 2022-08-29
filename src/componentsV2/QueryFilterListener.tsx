import React from 'react'
import { useRouter } from 'next/router'

import { useTypedSelector } from '@hooks/useNewTypedSelector'

import stringifyFilters from '@utils/filters/stringifyFilters'

export default React.memo(function QueryFilterListener () {
	const router = useRouter()
  const filter = useTypedSelector((state) => state.filter)

	React.useEffect(() => {
		const query = stringifyFilters(filter)
		router.replace({ query }, undefined, { scroll: false, shallow: true })
	}, [filter])

	return null
})
