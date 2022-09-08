import React from 'react'

import { wrapper } from 'src/storage/configureStore'
import { authorize } from '@utils/server'

import { filtersUpdate } from '@entities/filters/actions'

import MyPacks from '@containers/MyPacks'

import { getTokenFromCtx } from '@utils/token'
import parseFilters from '@utils/filters/parseFilters'
import { MainLayout } from '@components/MainLayout'
import Butterfly from '@components/ParrotAndButterfly/Butterfly'

export default function MyPacksPage() {
  return (
    <MainLayout snakeOnTop={true} isParrotAndButterfly={<Butterfly />}>
      <MyPacks />
    </MainLayout>
  )
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
      }
    }
    await store.dispatch(filtersUpdate(parseFilters(ctx.query)))
    return {
      props: {},
    }
  })
)
