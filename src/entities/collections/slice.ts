
import { createSlice } from '@reduxjs/toolkit'
import { fetchCollections, resetCollections } from './actions'

const initialState = {
  totalCount: null,
	list: null
}

const slice = createSlice({
  name: 'collections',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCollections.fulfilled, (state, action) => {
      state.totalCount = action.payload.totalCount;
      state.list = action.payload.list;
    })
		builder.addCase(resetCollections, (state) => {
      state.totalCount = null
      state.list = null
    })
  },
})

export default slice.reducer
