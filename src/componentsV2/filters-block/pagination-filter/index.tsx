// @ts-nocheck
import React, { RefObject } from 'react'
import { useDispatch } from 'react-redux'

import styles from './PaginationFilter.module.scss'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { filtersUpdate } from '@entities/filters/actions'

import Pagination from '@commonV2/pagination'

import { getPagesCnt } from '@utils/pagination'

export type BuyPaginationProps = {
  scrollRef?: RefObject<HTMLDivElement>
	field: string
}

export default function PaginationFilter ({ scrollRef, field }: BuyPaginationProps) {
  const dispatch = useDispatch()
  const { page, limit } = useTypedSelector((state) => state.filter)
  const totalCount = useTypedSelector((state) => state[field].totalCount)

  const setPage = React.useCallback((page: number) => {
		dispatch(filtersUpdate({ page }))
		if (scrollRef) scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
	}, [dispatch, scrollRef])

  return (
    <div className={styles.pagination}>
      <Pagination
        setCurrentPage={setPage}
        currentPage={page}
        countOfPage={getPagesCnt(totalCount, limit)}
      />
    </div>
  )
}
