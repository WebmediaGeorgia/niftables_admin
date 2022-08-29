import { createAction, createAsyncThunk } from '@reduxjs/toolkit'

import { $apiWithToken } from 'src/common/api'

export const fetchLikedNfts = createAsyncThunk(
	'liked-nfts/fetchLikedNfts',
	async (params, thunkApi) => {
		try {
			const response = await $apiWithToken.get('/collections/nfts/liked', { params })
			return response.data
		} catch (error) {
			return thunkApi.rejectWithValue({
				message: 'Get user liked nfts request failed',
			})
		}
	}
)
