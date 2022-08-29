import { AxiosResponse } from 'axios';
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
  IReserveResponse,
} from 'src/common/models/reservation';

export interface ReservationRepo {
  getMyReservation: (
    data: IGetMyReservationPayload
  ) => Promise<AxiosResponse<IGetMyReservationResponse, any>>;

  getReservationByNFT: (
    data: IGetReservationByNFTPayload
  ) => Promise<AxiosResponse<IGetReservationByNFTResponse, any>>;

  getReservationByPack: (
    data: IGetReservationByPackPayload
  ) => Promise<AxiosResponse<IGetReservationByPackResponse, any>>;

  reserve: (
    data: IReservePayload
  ) => Promise<AxiosResponse<IReserveResponse, any>>;

  checkout: (
    data: ICheckoutPayload
  ) => Promise<AxiosResponse<ICheckoutResponse, any>>;

  cancel: (
    data: ICancelReservationPayload
  ) => Promise<AxiosResponse<ICancelReservationResponse, any>>;
}
