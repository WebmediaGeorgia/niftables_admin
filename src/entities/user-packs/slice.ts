
// @ts-nocheck
import { createSlice } from '@reduxjs/toolkit'
import { fetchUserPacks } from './actions'

const initialState = {
	totalCount: 0,
  packs: null
}

const slice = createSlice({
  name: 'user-packs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
		builder.addCase(fetchUserPacks.fulfilled, (state, action) => {
      state.totalCount = action.payload.totalCount
      state.packs = action.payload.list
    })
  },
})

export default slice.reducer
