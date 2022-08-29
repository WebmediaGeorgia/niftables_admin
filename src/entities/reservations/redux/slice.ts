import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { errorReducer, pendingReducer } from '@utils/extraReducers';
import { HYDRATE } from 'next-redux-wrapper';
import {
  ReservationState,
  ReservationStatus,
  ReserveErrorMessages,
} from 'src/common/models/reservation';
import { RootState } from 'src/storage/configureStore';

import {
  getReservationByNFTRequest,
  getReservationByPackRequest,
  reserveRequest,
  cancelRequest,
  clearReservationError,
  checkoutRequest,
} from './actions';

const initialState: ReservationState = {
  pending: false,
  error: null,
};

const slice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: PayloadAction<RootState, any>) => {
      // state.pending = false;
      // state.error = null;
      // state.reservation = action.payload.reservation.reservation;
      state = { ...state, ...action.payload.reservation };
    });

    builder.addCase(clearReservationError, (state, action) => {
      state.error = null;
    });

    builder.addCase(checkoutRequest.fulfilled, (state, action) => {
      state.pending = false;
      state.error = null;
      state.myReservation = action.payload;
    });

    builder.addCase(getReservationByNFTRequest.fulfilled, (state, action) => {
      state.pending = false;
      state.error = null;
      state.itemReservation = action.payload;
    });

    builder.addCase(getReservationByPackRequest.fulfilled, (state, action) => {
      state.pending = false;
      state.error = null;
      state.itemReservation = action.payload;
    });

    builder.addCase(reserveRequest.fulfilled, (state, action) => {
      state.pending = false;
      state.error = null;
      state.myReservation = action.payload;
      state.method = action.meta.arg.method;
    });

    builder.addCase(cancelRequest.fulfilled, (state, action) => {
      state.pending = false;
      state.error = null;
      if (state.myReservation) {
        state.myReservation.status = ReservationStatus.CANCELLED;
      }
    });

    builder.addCase(reserveRequest.rejected, (state, action) => {
      state.pending = false;
      if (!action.payload) {
        state.error = ReserveErrorMessages.RESERVE_REQUEST_FAILED;
      } else {
        state.error = action.payload.message;
        state.myReservation = action.payload.myReservation;
        state.itemReservation = action.payload.itemReservation;
      }
    });

    builder.addMatcher(
      isAnyOf(
        checkoutRequest.pending,
        getReservationByNFTRequest.pending,
        getReservationByPackRequest.pending,
        reserveRequest.pending,
        cancelRequest.pending
      ),
      pendingReducer
    );
    builder.addMatcher(
      isAnyOf(
        getReservationByNFTRequest.rejected,
        getReservationByPackRequest.rejected,
        cancelRequest.rejected,
        checkoutRequest.rejected
      ),
      errorReducer
    );
  },
});

export default slice.reducer;
