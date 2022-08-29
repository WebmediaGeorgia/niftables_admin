// @ts-nocheck
import { createSlice } from '@reduxjs/toolkit'

import { setModal, setModalOptions, resetModal } from './actions'

const initialState = {
  isOpen: false,
	viewType: null,
	options: {},
	data: null
};

const slice = createSlice({
  name: 'modal',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setModal, (state, action) => {
      return { ...state, ...action.payload }
    });
		builder.addCase(setModalOptions, (state, action) => {
      return {
				...state,
				options: {
					...state.options,
					...action.payload
				}
			}
    });
    builder.addCase(resetModal, () => {
      return { ...initialState }
    });
  },
});

export default slice.reducer;
