import { createAction } from '@reduxjs/toolkit';

const base = 'modal'

export const setModal = createAction(`${base}/set`);
export const setModalOptions = createAction(`${base}/set-options`);
export const resetModal = createAction(`${base}/reset`);
