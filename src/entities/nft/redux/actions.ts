import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { IRejectValue } from 'src/common/models/misc';
import {
  IGetBuyNFTPayload,
  IGetCollectionNFTSPayload,
  IGetCollectionNFTSResponse,
  INFTClaimPayload,
  INFTClaimResponse,
  ILikeNFTPayload,
  ILikeNFTResponse,
} from 'src/common/models/nft';
import Injector from 'src/injector';
import { NFT_REPO } from 'src/injector/constants';
import { NFTRepo } from '../model/NFTRepo';

const {
  getCollectionNFTs,
  getNFTById,
  getBuyNFTs,
  claimNFT,
  likeNFT,
} = Injector.get(NFT_REPO) as NFTRepo;

export const clearClaimStatus = createAction('nft/clearClaimStatus');
export const updateNftsListLike = createAction('nft/updateNftsListLike')

export const getCollectionNFTsRequest = createAsyncThunk<
  IGetCollectionNFTSResponse,
  IGetCollectionNFTSPayload,
  { rejectValue: IRejectValue }
>(
  'nft/getCollectionNFTs',
  async (data: IGetCollectionNFTSPayload, thunkApi) => {
    try {
      const response = await getCollectionNFTs(data);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue({
        message: 'Get collection nfts request failed'
      });
    }
  }
);

export const claimNFTRequest = createAsyncThunk<
  INFTClaimResponse,
  INFTClaimPayload,
  { rejectValue: IRejectValue }
>('collections/nft-claim', async (data: INFTClaimPayload, thunkApi) => {
  try {
    const response = await claimNFT(data);
    if (response.status === (200 || 201)) {
      return { id: data.tokenIds[0] };
    } else {
      return response.data;
    }
  } catch (error) {
    return thunkApi.rejectWithValue({
      message: 'Claim nft request failed',
    });
  }
});

export const getBuyNFTsRequest = createAsyncThunk<
  IGetCollectionNFTSResponse,
  IGetBuyNFTPayload,
  { rejectValue: IRejectValue }
>('nft/getBuyNFTs', async (data: IGetBuyNFTPayload, thunkApi) => {
  try {
    const response = await getBuyNFTs(data);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue({
      message: 'Get buy nfts request failed',
    });
  }
});

export const likeNFTRequest = createAsyncThunk<
  ILikeNFTResponse,
  ILikeNFTPayload,
  { rejectValue: IRejectValue }
>('nft/likeNFT', async (data: ILikeNFTPayload, thunkApi) => {
  try {
    await likeNFT(data);
    const response = await getNFTById(data);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue({
      message: 'Like nft request failed',
    });
  }
});
