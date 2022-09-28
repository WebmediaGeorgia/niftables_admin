// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { nftsOptions } from '@constants/drop-down-options'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { filtersUpdate } from '@entities/filters/actions'

import TotalCounter from '@commonV2/TotalCounter'
import SearchInput from '@commonV2/SearchInput'
import DropDown from '@commonV2/drop-down'
import CellsViewSwitcher from '@commonV2/CellsViewSwitcher'
import {NFT_PAGE} from "@constants/view-types";

export default function NftsSearchBlock () {
  const dispatch = useDispatch()
  const count = useTypedSelector((state) => state.nft.count || '')
  const search = useTypedSelector((state) => state.filter.search || '')
  const dropDownValue = useTypedSelector((state) => state.filter.dropDownValue)

  const searchHandler = React.useCallback((search) => {
    dispatch(filtersUpdate({ search, page: 1 }))
  },[dispatch]);

  const dropDownChangeHandler = React.useCallback(({ value, sort, order }) => {
    dispatch(filtersUpdate({ dropDownValue: value, sort, order, page: 1 }))
  }, [dispatch]);

  return (
    <StyledWrapper>
      <div className='nft-count'>
        <TotalCounter counter={count} />
      </div>
      <SearchInput
        className='search'
        placeholder='Search via Token ID/Name'
        value={search}
        searchHandler={searchHandler}
      />
      <div className='sort-by'>
        <div className='sort-by-title g-mr-20'>
          Sort by:
        </div>
        <DropDown
          className='sort-by-drop-down'
          options={nftsOptions}
          value={dropDownValue}
          changeHandler={dropDownChangeHandler}
        />
      </div>
      <CellsViewSwitcher page={NFT_PAGE} className='switcher' />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    margin-bottom: 0;
  }
  .nft-count {
    width: 100%;
    max-width: 260px;
    @media only screen and (max-width: 1024px) {
      max-width: 160px;
    }
    @media only screen and (max-width: 768px) {
      order: 2;
      margin-top: 25px;
    }
    @media only screen and (max-width: 480px) {
      width: 25%;
      font-size: 14px;
    }
  }
  .search {
    width: 100%;
    max-width: 450px;
    margin-left: 25px;
    @media only screen and (max-width: 768px) {
      order: 1;
      max-width: unset;
      margin-left: 0;
    }
  }
  .sort-by {
    display: flex;
    align-items: center;
    white-space: nowrap;
    margin-left: 25px;
    .sort-by-title {
      font-weight: 300;
      font-size: 15px;
      line-height: 22px;
    }
    .sort-by-drop-down {
      width: 200px;
      @media only screen and (max-width: 1024px) {
        width: 190px;
      }
    }
    @media only screen and (max-width: 768px) {
      order: 3;
      margin-top: 25px;
    }
    @media only screen and (max-width: 480px) {
      width: 75%;
      margin-left: 0;
    }
  }
  .switcher {
    margin-left: 25px;
    @media only screen and (max-width: 1024px) {
      display: none;
    }
  }
`
