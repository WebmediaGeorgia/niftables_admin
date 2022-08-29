// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux';

import styles from './Redeem.module.scss'

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
    <SearchInput
      className={styles.search}
      placeholder='Search via Token ID/Name'
      value={search}
      searchHandler={searchHandler}
    />
  )
}
