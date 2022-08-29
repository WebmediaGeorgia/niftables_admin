import React from 'react';

import { wrapper } from 'src/storage/configureStore';
import { authorize } from '@utils/server';

import { MyProfile } from '@containers/MyProfile';

import { getTokenFromCtx } from '@utils/token';
import { MainLayout } from '@components/MainLayout';
import Butterfly from '@components/ParrotAndButterfly/Butterfly';

export default function MyProfilePage() {
  return (
    <MainLayout snakeOnTop={true} isParrotAndButterfly={<Butterfly />}>
      <MyProfile />
    </MainLayout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  authorize(async (ctx, store) => {
    if (!getTokenFromCtx(ctx)) {
      return {
        redirect: {
          permanent: false,
          destination: '/',
        },
        props: {},
      };
    }
    return {
      props: {},
    };
  })
);
