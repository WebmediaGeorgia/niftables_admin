// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import cn from 'classnames'

import styles from './ProfileSearchBlock.module.scss'

import { userNftsOptions } from '@constants/drop-down-options'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { filtersUpdate } from '@entities/filters/actions'

import SearchInput from '@commonV2/SearchInput'
import DropDown from '@commonV2/drop-down'

export default function ProfileSearchBlock () {
	const dispatch = useDispatch()
  const search = useTypedSelector((state) => state.filter.search || '')
  const dropDownValue = useTypedSelector((state) => state.filter.dropDownValue)

  const searchHandler = React.useCallback((search) => {
		dispatch(filtersUpdate({ search, page: 1 }))
	}, [dispatch])

  const dropDownChangeHandler = React.useCallback(({ value, sort, order }) => {
		dispatch(filtersUpdate({ dropDownValue: value, sort, order, page: 1 }))
	}, [dispatch])

  const [toggleInput, setToggleInput] = React.useState(true)

  const onClickToggle = () => {
    setToggleInput(!toggleInput)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.column}>
        <div
          className={cn(
            styles['search-toggle-wrapper'],
            toggleInput && styles.searchClose
          )}
        >
          <SearchInput
						className={styles['search-toggle']}
						placeholder='Search via Token ID/Name'
						value={search}
						searchHandler={searchHandler}
						onToggleInput={onClickToggle}
            toggleInput={toggleInput}
          />
        </div>
        <div className={styles.sortBy}>
          <span className={styles['sortBy-title']}>Sort by:</span>
          <DropDown
            className={styles['sortBy-dropDown']}
						options={userNftsOptions}
            value={dropDownValue}
            changeHandler={dropDownChangeHandler}
          />
        </div>
      </div>
    </div>
  )
}
