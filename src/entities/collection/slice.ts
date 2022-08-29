
// @ts-nocheck
import { HYDRATE } from 'next-redux-wrapper'
import { createSlice } from '@reduxjs/toolkit'
import { fetchCollection, resetCollections } from './actions'

const initialState = {
  collection: null,
	error: null,
}

const slice = createSlice({
  name: 'collection',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      state.collection = action.payload.collection.collection
			state.error = action.payload.collection.error
    })
		builder.addCase(fetchCollection.fulfilled, (state, action) => {
      state.collection = action.payload
			state.error = null
    })
		builder.addCase(resetCollections, (state) => {
      state.collection = null
			state.error = null
    })
		builder.addCase(fetchCollection.rejected, (state, action) => {
			state.error = action.payload.message
		})
  },
})

export default slice.reducer
