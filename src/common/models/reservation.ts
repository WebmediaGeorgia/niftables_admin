import { Empty, IRejectValue } from './misc';

export enum ReservationStatus {
  NEW = 'NEW',
  CANCELLED = 'CANCELLED',
  CHECKOUT = 'CHECKOUT',
  PAYED = 'PAYED',
  FAILED = 'FAILED',
}

export enum ReservationPaymentStatus {
  SUCCESS = 'SUCCESS',
  RESERVAION_NOT_FOUND = 'RESERVATION_NOT_FOUND',
  RESERVATION_IS_NOT_ACTIVE = 'RESERVATION_IS_NOT_ACTIVE',
  RESERVATION_EXPIRED = 'RESERVATION_EXPIRED',
}

export enum ReservationTypes {
  NFT = 'NFT',
  PACK = 'PACKS',
}

export enum PayMethods {
  CARD = 'CARD',
  CRYPTO = 'CRYPTO',
  VIRTUAL_BALANCE = 'VIRTUAL_BALANCE',
}

export enum ReserveErrorMessages {
  HAVE_ONLY_RESERVED = 'HAVE_ONLY_RESERVED',
  SOLD_OUT = 'SOLD_OUT',
  RESERVATION_BLOCKED = 'RESERVATION_BLOCKED',
  RESERVE_REQUEST_FAILED = 'RESERVE_REQUEST_FAILED',
}

export interface IReservation {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt?: any;
  referenceId: number;
  expiredAt: string;
  blockedTo: string;
  tries: number;
  status: ReservationStatus;
  type: ReservationTypes;
}

export interface ReservationState {
  pending: boolean;
  error: string | null;
  myReservation?: IReservation;
  itemReservation?: IReservation;
  method?: PayMethods;
}

export interface IReservePayload {
  type: ReservationTypes;
  referenceId: number;
  method: PayMethods;
}

export interface IReserveResponse extends IReservation {}

export interface ICheckoutPayload {
  type: ReservationTypes;
  referenceId: number;
}

export interface ICheckoutResponse extends IReservation {}

export interface IReserveReject extends IRejectValue {
  myReservation?: IReservation;
  itemReservation?: IReservation;
}

export interface IGetMyReservationPayload extends Empty {}

export interface IGetMyReservationResponse extends IReservation {}

export interface IGetReservationByNFTPayload {
  id: number;
}

export interface IGetReservationByNFTResponse extends IReservation {}

export interface IGetReservationByPackPayload {
  id: number;
}

export interface IGetReservationByPackResponse extends IReservation {}

export interface ICancelReservationPayload extends Empty {}

export interface ICancelReservationResponse extends Empty {}
