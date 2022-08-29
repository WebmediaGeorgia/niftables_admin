
// @ts-nocheck
import { createSlice } from '@reduxjs/toolkit'
import { fetchRedeemNfts } from './actions'

const initialState = {
	totalCount: 0,
  tokens: null
}

const slice = createSlice({
  name: 'redeem',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
		builder.addCase(fetchRedeemNfts.fulfilled, (state, action) => {
      state.totalCount = action.payload.totalCount
      state.tokens = action.payload.list
    })
  }
})

export default slice.reducer
