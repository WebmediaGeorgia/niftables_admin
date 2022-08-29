import React, { useEffect } from 'react';

import { useTypedSelector } from '@hooks/useNewTypedSelector';

import { userInfoRequest } from '@entities/user/redux/actions';
import { useDispatch } from 'react-redux';
import { isServer } from '@utils/common';

import { HomePage } from '@components/HomePage/HomePage';
import { HomeNewPage } from '@components/HomePage/HomeNewPage';
import { MainLayout } from '@components/MainLayout';
import Hero from '@components/Hero';

type selectPage = 'newHomePage' | 'homePage';

const Home = () => {
  const dispatch = useDispatch();
  const { userType } = useTypedSelector((state) => state.auth);

  const selectHomePage: selectPage = 'newHomePage';

  const getHomePage = () => {
    switch (selectHomePage as selectPage) {
      case 'newHomePage':
        return <HomeNewPage userType={userType} />;
      case 'homePage':
        return <HomePage userType={userType} />;

      default:
        return <HomePage userType={userType} />;
    }
  };

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
    <MainLayout
      className='home'
      isHero={<Hero />}
      isHome='home'
    >
      {getHomePage()}
    </MainLayout>
  );
};

export default Home;
