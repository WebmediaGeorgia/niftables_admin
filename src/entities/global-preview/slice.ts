// @ts-nocheck
import { createSlice } from '@reduxjs/toolkit'

import { setModal, resetModal } from './actions'

const initialState = {
  isOpen: false,
  preview: null
};

const slice = createSlice({
  name: 'global-preview',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setModal, (state, action) => {
      return { ...state, ...action.payload }
    });
    builder.addCase(resetModal, () => {
      return { ...initialState }
    });
  },
});

export default slice.reducer;
