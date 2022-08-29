import { createAction, createAsyncThunk } from '@reduxjs/toolkit'

import { $apiWithToken } from 'src/common/api'

export const fetchRedeemNfts = createAsyncThunk(
	'redeem/fetchRedeemNfts',
	async (params, thunkApi) => {
		try {
			const response = await $apiWithToken.get('/collections/user-nfts', { params })
			return response.data
		} catch (error) {
			return thunkApi.rejectWithValue({
				message: 'Get user redeem nfts request failed',
			})
		}
	}
)
