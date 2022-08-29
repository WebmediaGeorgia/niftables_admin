import { NFTRepo } from '@entities/nft/model/NFTRepo';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IRejectValue } from 'src/common/models/misc';
import {
  IGetPacksResponse,
  IGetPacksPayload,
  IGetPackByIdResponse,
  IGetPackByIdPayload,
  IGetUserPacksResponse,
  IGetUserPacksPayload,
  IBuyPackPayload,
  IBuyPackResponse,
  IOpenPackPayload,
  IOpenPackResponse,
} from 'src/common/models/pack';
import Injector from 'src/injector';
import { NFT_REPO, PACK_REPO } from 'src/injector/constants';
import { PackRepo } from '../model/PackRepo';

const { getPacks, getPackById, getUserPacks, buyPack, openPack } = Injector.get(
  PACK_REPO
) as PackRepo;

const { getNFTById } = Injector.get(NFT_REPO) as NFTRepo;

export const getPacksRequest = createAsyncThunk<
  IGetPacksResponse,
  IGetPacksPayload,
  { rejectValue: IRejectValue }
>('pack/getPacks', async (data: IGetPacksPayload, thunkApi) => {
  try {
    const response = await getPacks(data);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue({
      message: 'Get packs request failed',
    });
  }
});

export const openPackRequest = createAsyncThunk<
  IOpenPackResponse,
  IOpenPackPayload,
  { rejectValue: IRejectValue }
>('pack/openPack', async (data: IOpenPackPayload, thunkApi) => {
  try {
    const openedNFT = await openPack(data);
    const revealedNFTId = openedNFT.data[0].id;
    if (!revealedNFTId) {
      throw new Error('cant parse revealed nft id');
    }
    const response = await getNFTById({ id: revealedNFTId });
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue({
      message: 'Open pack request failed',
    });
  }
});
