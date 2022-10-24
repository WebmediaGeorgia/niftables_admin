import React, { useEffect } from 'react';
import { useTypedSelector } from '@hooks/useNewTypedSelector';
import { userInfoRequest } from '@entities/user/redux/actions';
import { useDispatch } from 'react-redux';
import { isServer } from '@utils/common';
import HomePage from '@containers/HomePage';
import Header from '@components/header';

const Home = () => {
  const dispatch = useDispatch();
  const { userType } = useTypedSelector((state) => state.auth);

  useEffect(() => {
    if (!isServer) {
      setTimeout(() => {
        if (userType === 'authorized') {
          dispatch(userInfoRequest({}));
        }
      }, 1000);
    }
  }, [userType]);

  return (
    <>
      <Header isHomePage />
      <HomePage/>
    </>
  );
};

export default Home;
