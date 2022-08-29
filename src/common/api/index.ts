// @ts-nocheck
import axios, { AxiosInstance } from 'axios';
import router from 'next/router';

import { getToken } from '@utils/token';
import { eraseCookie } from '@utils/cookies';

import rateLimit from './rateLimit'

const FORCE_LOGOUT_ERROR_STATUS_ARRAY = [401, 403];

const logoutInterceptor = () => {
  eraseCookie('auth');
  eraseCookie('user');
  localStorage.clear();
  window.location.replace('/');
};

const $api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DOMAIN,
  headers: {
    'Content-Type': 'application/json',
    whitelabel: process.env.NEXT_PUBLIC_WHITELABEL_HEADER,
  },
});

export const $apiWithToken: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DOMAIN,
  headers: {
    'Content-Type': 'application/json',
    whitelabel: process.env.NEXT_PUBLIC_WHITELABEL_HEADER,
  },
});

$apiWithToken.interceptors.request.use(async (config) => {
  const token = getToken();

  if (token) {
    config.headers = {
      Authorization: `Bearer ${token}`,
      whitelabel: process.env.NEXT_PUBLIC_WHITELABEL_HEADER,
    };
  }

  return config;
});

$apiWithToken.interceptors.response.use(undefined, (error) => {
	const status = error.response.status;
  if (status === 503) router.push('/maintenance-mode');
  if (FORCE_LOGOUT_ERROR_STATUS_ARRAY.includes(status)) {
    logoutInterceptor();
  }
  if (status === 429) rateLimit()
  return Promise.reject(error);
});

export default $api;
