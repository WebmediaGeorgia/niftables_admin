
// @ts-nocheck
import { createSlice } from '@reduxjs/toolkit'
import { fetchLikedNfts, removeLikedNftsListLike } from './actions'

const initialState = {
	totalCount: 0,
  nfts: null
}

const slice = createSlice({
  name: 'liked-nfts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
		builder.addCase(fetchLikedNfts.fulfilled, (state, action) => {
      state.totalCount = action.payload.totalCount
      state.nfts = action.payload.list
    })
		builder.addCase(removeLikedNftsListLike, (state, action) => {
      const newNfts = state.nfts.filter(({ id }) => id !== action.payload.id)
      return {
        ...state,
        nfts: newNfts
      }
    })
  },
})

export default slice.reducer
