import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { PackState } from 'src/common/models/pack';
import { errorReducer, pendingReducer } from '@utils/extraReducers';
import { RootState } from 'src/storage/configureStore';
import {
  getPacksRequest,
  openPackRequest,
} from './actions';

const initialState: PackState = {
  pending: false,
  error: null,
  list: [],
};

const slice = createSlice({
  name: 'pack',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: PayloadAction<RootState, any>) => {
      state.pending = false;
      state.error = null;
      state.list = action.payload.pack.list;
      state.totalCount = action.payload.pack.totalCount;
    });
    builder.addCase(getPacksRequest.fulfilled, (state, action) => {
      state.pending = false;
      state.error = null;
      state.totalCount = action.payload.totalCount;
      state.list = action.payload.list;
      // state.rarities = action.payload.rarities;
    });
    builder.addCase(openPackRequest.fulfilled, (state, action) => {
      state.pending = false;
      state.error = null;
      state.revealedNFT = action.payload;
      const openedPackId = action.meta.arg.id;
      const newList = state.list.filter((item) => item.id !== openedPackId);
      state.list = newList;
    });
    builder.addMatcher(
      isAnyOf(
        getPacksRequest.pending,
        openPackRequest.pending
      ),
      pendingReducer
    );
    builder.addMatcher(
      isAnyOf(
        getPacksRequest.rejected,
        openPackRequest.rejected
      ),
      errorReducer
    );
  },
});

export default slice.reducer;
