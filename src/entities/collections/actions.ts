import { createAction, createAsyncThunk } from '@reduxjs/toolkit'

import { $apiWithToken } from 'src/common/api'

export const fetchCollections = createAsyncThunk(
  'collections/fetchCollections',
  async (params, thunkApi) => {
    try {
      const response = await $apiWithToken.get('/collections/collections', { params })
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue({
        message: 'Get Collections request failed',
      });
    }
  }
);

export const resetCollections = createAction('collections/reset');
