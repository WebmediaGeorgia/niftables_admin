
// @ts-nocheck
import { createSlice } from '@reduxjs/toolkit'
import { fetchUserNftTokens } from './actions'

const initialState = {
	totalCount: 0,
  tokens: null
}

const slice = createSlice({
  name: 'user-tokens',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
		builder.addCase(fetchUserNftTokens.fulfilled, (state, action) => {
      state.totalCount = action.payload.totalCount
      state.tokens = action.payload.list
    })
  },
})

export default slice.reducer
