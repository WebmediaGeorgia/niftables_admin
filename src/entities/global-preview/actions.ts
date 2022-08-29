import { createAction } from '@reduxjs/toolkit';

const base = 'global-preview'

export const setModal = createAction(`${base}/set`);
export const resetModal = createAction(`${base}/reset`);
