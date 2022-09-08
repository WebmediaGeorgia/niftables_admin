// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'

import { useTypedSelector } from '@hooks/useNewTypedSelector';
import { filtersUpdate } from '@entities/filters/actions';

import SearchInput from '@commonV2/SearchInput'

export default function NftsSearch () {
  const dispatch = useDispatch();
  const search = useTypedSelector((state) => state.filter.search || '');

  const searchHandler = React.useCallback((search) => {
    dispatch(filtersUpdate({ search, page: 1 }));
  },[dispatch]);

  return (
    <StyledSearchInput
      placeholder='Search via Token ID/Name'
      value={search}
      searchHandler={searchHandler}
    />
  )
}

const StyledSearchInput = styled(SearchInput)`
  max-width: 480px;
`
