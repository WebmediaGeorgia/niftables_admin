import { $apiWithToken } from 'src/common/api';
import { AxiosResponse } from 'axios';
import {
  IGetMyReservationPayload,
  IGetMyReservationResponse,
  IGetReservationByNFTPayload,
  IGetReservationByNFTResponse,
  IGetReservationByPackPayload,
  IGetReservationByPackResponse,
  IReservePayload,
  IReserveResponse,
  ICancelReservationPayload,
  ICancelReservationResponse,
  ICheckoutPayload,
  ICheckoutResponse,
} from 'src/common/models/reservation';
import { ReservationRepo } from '../model/ReservationRepo';

class HTTPReservationRepo implements ReservationRepo {
  getMyReservation: (
    data: IGetMyReservationPayload
  ) => Promise<AxiosResponse<IGetMyReservationResponse, any>> = () =>
    $apiWithToken.get('reservations/my');
  getReservationByNFT: (
    data: IGetReservationByNFTPayload
  ) => Promise<AxiosResponse<IGetReservationByNFTResponse, any>> = ({ id }) =>
    $apiWithToken.get('reservations/getByNft', { params: { id } });
  getReservationByPack: (
    data: IGetReservationByPackPayload
  ) => Promise<AxiosResponse<IGetReservationByPackResponse, any>> = ({ id }) =>
    $apiWithToken.get('reservations/getByPack', { params: { id } });
  reserve: (
    data: IReservePayload
  ) => Promise<AxiosResponse<IReserveResponse, any>> = ({
    type,
    referenceId,
  }) => $apiWithToken.post('reservations', { type, referenceId });
  checkout: (
    data: ICheckoutPayload
  ) => Promise<AxiosResponse<ICheckoutResponse, any>> = ({
    type,
    referenceId,
  }) => $apiWithToken.put('reservations', { type, referenceId });
  cancel: (
    data: ICancelReservationPayload
  ) => Promise<AxiosResponse<ICancelReservationResponse, any>> = () =>
    $apiWithToken.put('reservations/cancel');
}

export default HTTPReservationRepo;
