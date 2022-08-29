import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './rootReducer';

let _store;

export function _getStore() {
  return _store;
}

export const makeStore = () => {
  const store = configureStore({ reducer: rootReducer });
  _store = store;
  return store;
};

export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore['getState']>;

export type AppDispatch = RootStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper<RootStore>(makeStore, {
  debug: false,
});
