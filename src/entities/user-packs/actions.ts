import { createAction, createAsyncThunk } from '@reduxjs/toolkit'

import { $apiWithToken } from 'src/common/api'

export const fetchUserPacks = createAsyncThunk(
	'user-packs/fetchUserPacks',
	async (params, thunkApi) => {
		try {
			const response = await $apiWithToken.get(`/collections/user-packs`, { params })
			return response.data
		} catch (error) {
			return thunkApi.rejectWithValue({
				message: 'Get user packs request failed',
			})
		}
	}
)