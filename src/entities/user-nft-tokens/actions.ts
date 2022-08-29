import { createAction, createAsyncThunk } from '@reduxjs/toolkit'

import { $apiWithToken } from 'src/common/api'

export const fetchUserNftTokens = createAsyncThunk(
  'user-tokens/fetchUserNftTokens',
  (params, thunkApi) => {
    return $apiWithToken
      .get('/collections/user-nfts', { params })
      .then(({ data }) => data)
      .catch(() => thunkApi.rejectWithValue({ message: 'Get user nfts request failed' }))
  }
)
