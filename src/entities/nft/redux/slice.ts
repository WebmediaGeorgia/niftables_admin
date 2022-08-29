// @ts-nocheck
import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { NFTState } from 'src/common/models/nft';
import { errorReducer, pendingReducer } from '@utils/extraReducers';
import { RootState } from 'src/storage/configureStore';
import {
  claimNFTRequest,
  clearClaimStatus,
  getBuyNFTsRequest,
  getCollectionNFTsRequest,
  likeNFTRequest,
  updateNftsListLike
} from './actions';

const initialState: NFTState = {
  pending: false,
  error: null,
  totalCount: 0,
  likedTotalCount: 0,
  list: [],
  likedList: [],
  redeemOptions: [],
  traits: [],
  rarities: {},
  userAllNFT: [],
  claimedSuccess: false,
  count: '0',
};

const slice = createSlice({
  name: 'nft',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: PayloadAction<RootState, any>) => {
      state.pending = false;
      state.error = null;
      state.list = action.payload.nft.list;
      state.likedList = action.payload.nft.likedList;
      state.userAllNFT = action.payload.nft.userAllNFT;
      state.totalCount = action.payload.nft.totalCount;
      state.traits = action.payload.nft.traits || [];
      state.redeemOptions = action.payload.nft.redeemOptions || [];
      state.rarities = action.payload.nft.rarities || {};
      state.count = action.payload.nft.count || '0';
    });

    builder.addCase(getCollectionNFTsRequest.fulfilled, (state, action) => {
      state.pending = false;
      state.error = null;
      state.totalCount = action.payload.totalCount;
      state.list = action.payload.list;
      state.traits = action.payload.traits || [];
      state.rarities = action.payload.rarities || {};
      state.count = action.payload.count;
    });

    builder.addCase(getBuyNFTsRequest.fulfilled, (state, action) => {
      state.pending = false;
      state.error = null;
      state.totalCount = action.payload.totalCount;
      state.list = action.payload.list;
      state.traits = action.payload.traits || [];
      state.redeemOptions = action.payload.redeemOptions || [];
      state.rarities = action.payload.rarities || {};
      state.count = action.payload.count;
    });

    builder.addCase(claimNFTRequest.fulfilled, (state, action) => {
      state.pending = false;
      state.error = null;
      state.claimedSuccess = true;
      if (action.payload.id) {
        state.list = state.list.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              claimed: false,
            };
          }
          return item;
        });
      }
    });

    builder.addCase(clearClaimStatus, (state, action) => {
      state.claimedSuccess = false;
    });

    builder.addCase(likeNFTRequest.fulfilled, (state, action) => {
      state.pending = false;
      state.error = null;
      state.nft = action.payload;
      const newNFTlist = state.list.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      state.list = newNFTlist;
      if (
        action.payload.liked &&
        state.likedList.find((item) => item.id === action.payload.id) ===
          undefined
      ) {
        state.likedList.push(action.payload);
      } else {
        state.likedList = state.likedList.filter((item) => {
          return item.id !== action.payload.id;
        });
      }
    });

    builder.addCase(updateNftsListLike, (state, action) => {
      const { id, amount, liked } = action.payload
      const newList = state.list.map(item => {
        if (item.id !== id) return item
        return { ...item, liked, likesAmount: amount }
      })
      return {
        ...state,
        list: newList
      }
    })

    builder.addMatcher(
      isAnyOf(
        getCollectionNFTsRequest.pending,
        getBuyNFTsRequest.pending,
        claimNFTRequest.pending,
      ),
      pendingReducer
    );

    builder.addMatcher(
      isAnyOf(
        getCollectionNFTsRequest.rejected,
        getBuyNFTsRequest.rejected,
        claimNFTRequest.rejected,
      ),
      errorReducer
    );
  },
});

export default slice.reducer;
