// @ts-nocheck
import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import router from 'next/router';

import { $apiWithToken } from 'src/common/api'

export const fetchCollection = createAsyncThunk(
  'collection/fetchCollection',
  async (id, thunkApi) => {
    try {
      const response = await $apiWithToken.get(`/collections/${id}`)
      return response.data;
    } catch (error) {
			let message = 'Get collection by id request failed';
			if (error?.response?.data?.message === 'COLLECTION_NOT_FOUND') message = 'COLLECTION_NOT_FOUND';
      return thunkApi.rejectWithValue({
        message,
      });
    }
  }
);

export const resetCollections = createAction('collection/reset');
