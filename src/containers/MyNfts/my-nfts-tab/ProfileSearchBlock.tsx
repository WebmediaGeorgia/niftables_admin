// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { userNftsOptions } from '@constants/drop-down-options'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { filtersUpdate } from '@entities/filters/actions'

import ToggleSearchInput from '@commonV2/ToggleSearchInput'
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

  return (
    <StyledWrapper>
      <ToggleSearchInput
        placeholder='Search via Token ID/Name'
        value={search}
        searchHandler={searchHandler}
      />
      <div className='dropdown-wrapper'>
        <div className='sort-by'>
          Sort by:
        </div>
        <DropDown
          options={userNftsOptions}
          value={dropDownValue}
          changeHandler={dropDownChangeHandler}
        />
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 30px 0 40px;
  @media only screen and (max-width: 1024px) {
    flex-wrap: wrap;
    gap: 20px;
  }
  .dropdown-wrapper {
    display: flex;
    align-items: center;
    flex-grow: 1;
    gap: 15px;
    .sort-by {
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
      white-space: nowrap;
    }
  }
`
