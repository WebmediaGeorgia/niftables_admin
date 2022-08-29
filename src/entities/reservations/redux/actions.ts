import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { IRejectValue } from 'src/common/models/misc';
import {
  ICancelReservationPayload,
  ICancelReservationResponse,
  ICheckoutPayload,
  ICheckoutResponse,
  IGetMyReservationPayload,
  IGetMyReservationResponse,
  IGetReservationByNFTPayload,
  IGetReservationByNFTResponse,
  IGetReservationByPackPayload,
  IGetReservationByPackResponse,
  IReservePayload,
  IReserveReject,
  IReserveResponse,
  ReservationTypes,
  ReserveErrorMessages,
} from 'src/common/models/reservation';
import Injector from 'src/injector';
import { RESERVATION_REPO } from 'src/injector/constants';
import { ReservationRepo } from '../model/ReservationRepo';

const {
  getMyReservation,
  getReservationByNFT,
  getReservationByPack,
  reserve,
  cancel,
  checkout,
} = Injector.get(RESERVATION_REPO) as ReservationRepo;

export const clearReservationError = createAction('reservation/clearError');

export const getReservationByNFTRequest = createAsyncThunk<
  IGetReservationByNFTResponse,
  IGetReservationByNFTPayload,
  { rejectValue: IRejectValue }
>(
  'reservation/getByNft',
  async (data: IGetReservationByNFTPayload, thunkApi) => {
    try {
      const response = await getReservationByNFT(data);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue({
        message: 'Get reservation by nft request failed',
      });
    }
  }
);

export const getReservationByPackRequest = createAsyncThunk<
  IGetReservationByPackResponse,
  IGetReservationByPackPayload,
  { rejectValue: IRejectValue }
>(
  'reservation/getByPack',
  async (data: IGetReservationByPackPayload, thunkApi) => {
    try {
      const response = await getReservationByPack(data);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue({
        message: 'Get reservation by pack request failed',
      });
    }
  }
);

const RESERVE_FAILED_STANDARD_RESPONSE: IReserveReject = {
  message: ReserveErrorMessages.RESERVE_REQUEST_FAILED,
};

const handleReserveBlocked = async (): Promise<IReserveReject> => {
  try {
    const response = await getMyReservation({});
    return {
      message: ReserveErrorMessages.RESERVATION_BLOCKED,
      myReservation: response.data,
    };
  } catch (error) {
    return RESERVE_FAILED_STANDARD_RESPONSE;
  }
};

const handleNFTReserved = async (id: number): Promise<IReserveReject> => {
  try {
    const response = await getReservationByNFT({ id });
    return {
      message: ReserveErrorMessages.HAVE_ONLY_RESERVED,
      itemReservation: response.data,
    };
  } catch (error) {
    return RESERVE_FAILED_STANDARD_RESPONSE;
  }
};

const handlePackReserved = async (id: number): Promise<IReserveReject> => {
  try {
    const response = await getReservationByPack({ id });
    return {
      message: ReserveErrorMessages.HAVE_ONLY_RESERVED,
      itemReservation: response.data,
    };
  } catch (error) {
    return RESERVE_FAILED_STANDARD_RESPONSE;
  }
};

const handleReserveReject = async (
  message: string,
  id: number,
  type: ReservationTypes
): Promise<IReserveReject> => {
  switch (message) {
    case ReserveErrorMessages.RESERVATION_BLOCKED:
      return handleReserveBlocked();
    case ReserveErrorMessages.HAVE_ONLY_RESERVED:
      return type === ReservationTypes.NFT
        ? handleNFTReserved(id)
        : handlePackReserved(id);
    default:
      return RESERVE_FAILED_STANDARD_RESPONSE;
  }
};

export const reserveRequest = createAsyncThunk<
  IReserveResponse,
  IReservePayload,
  { rejectValue: IReserveReject }
>('reservation/reserve', async (data: IReservePayload, thunkApi) => {
  try {
    const response = await reserve(data);
    return response.data;
  } catch (error) {
    const message = (error as AxiosError).response?.data?.message;
    const rejectedValue: IReserveReject = await handleReserveReject(
      message,
      data.referenceId,
      data.type
    );
    return thunkApi.rejectWithValue(rejectedValue);
  }
});

export const checkoutRequest = createAsyncThunk<
  ICheckoutResponse,
  ICheckoutPayload,
  { rejectValue: IRejectValue }
>('reservation/checkout', async (data: ICheckoutPayload, thunkApi) => {
  try {
    const response = await checkout(data);
    return response.data;
  } catch (error) {
    const message =
      (error as AxiosError).response?.data?.message ||
      'Checkout request failed';
    return thunkApi.rejectWithValue({
      message,
    });
  }
});

export const cancelRequest = createAsyncThunk<
  ICancelReservationResponse,
  ICancelReservationPayload,
  { rejectValue: IRejectValue }
>('reservation/cancel', async (data: ICancelReservationPayload, thunkApi) => {
  try {
    const response = await cancel(data);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue({
      message: 'Cancel request failed',
    });
  }
});
