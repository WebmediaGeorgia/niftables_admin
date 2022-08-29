// @ts-nocheck
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import set from 'lodash/set'

import { DEFAULT_LIMIT } from '@constants/pagination'
import {
	ID,
	PAGE,
	LIMIT,
	COLLECTION_ID,
	MIN_PRICE,
	MAX_PRICE,
	RARITIES,
	TRAITS,
	FROM_DATE,
	TO_DATE,
	UTILITIES,
	DISTRIBUTIONS,
	MERGEABLE,
	GENERATIVE,
	STATUS,
	DROP_DATE_FROM,
	DROP_DATE_TO,
	SEARCH,
	SORT,
	ORDER
} from '@constants/filter'

import { filtersReset, filtersUpdate } from './actions'

import cloneDeep from '@utils/cloneDeep'

const initialState = {
	[ID]: null,
  [PAGE]: 1,
  [LIMIT]: DEFAULT_LIMIT,
  [COLLECTION_ID]: null,
  [MIN_PRICE]: null,
  [MAX_PRICE]: null,
  [FROM_DATE]: null,
  [TO_DATE]: null,
	[DROP_DATE_FROM]: null,
  [DROP_DATE_TO]: null,
  [RARITIES]: [],
  [UTILITIES]: [],
  [DISTRIBUTIONS]: [],
  [MERGEABLE]: [],
  [GENERATIVE]: [],
  [STATUS]: [],
  [TRAITS]: [],
  [SEARCH]: null,
  [SORT]:null,
  [ORDER]: null,
  dropDownValue: null
};

const slice = createSlice({
  name: 'filters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
			return {
				...state,
				...action.payload.filter
			}
    });
    builder.addCase(filtersUpdate, (state, action) => {
			const newState = cloneDeep(state)
			Object.keys(action.payload).forEach(key => {
				set(newState, key, action.payload[key])
			})
			return newState
		});
    builder.addCase(filtersReset, () => {
      return initialState
    });
  },
});

export default slice.reducer;
