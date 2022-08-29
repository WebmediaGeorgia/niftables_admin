// @ts-nocheck
import { createAction } from '@reduxjs/toolkit';

const base = 'utils';

export const setIsGlobalLoading = createAction(`${base}/is-global-loading`);
export const setViewType = createAction(`${base}/view-type`);
export const setIsFilterOpen = createAction(`${base}/is-filter-open`);
