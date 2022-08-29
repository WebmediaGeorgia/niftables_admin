import { createSlice } from '@reduxjs/toolkit';
import { ConfigurationState } from 'src/common/models/configuration';
import { getNavigationConfigRequest } from './actions';

const initialState: ConfigurationState = {
  error: null,
};

const slice = createSlice({
  name: 'configuration',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNavigationConfigRequest.fulfilled, (state, action) => {
      state.error = null;
      state.navigationConfig = action.payload.links;
    });
    builder.addCase(getNavigationConfigRequest.rejected, (state, action) => {
      state.error = 'NAV_CONFIG_ERROR';
    });
  },
});

export default slice.reducer;
