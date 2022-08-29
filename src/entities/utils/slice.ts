// @ts-nocheck
import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

import { GRID_SMALL } from '@constants/view-types'

import { setIsGlobalLoading, setViewType, setIsFilterOpen } from './actions'

const initialState = {
  isHydrated: false,
  isGlobalLoading: false,
  viewType: GRID_SMALL,
  isFilterOpen: false
}

const slice = createSlice({
  name: 'utils',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state) => {
      state.isHydrated = true
    })
    builder.addCase(setIsGlobalLoading, (state, action) => {
      state.isGlobalLoading = action.payload
    })
    builder.addCase(setViewType, (state, action) => {
      state.viewType = action.payload
    })
    builder.addCase(setIsFilterOpen, (state, action) => {
      state.isFilterOpen = action.payload
    })
  },
})

export default slice.reducer
