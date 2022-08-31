import React from 'react'

import { wrapper } from '../../src/storage/configureStore'

import Redeem from '@containers/Redeem'
import { filtersUpdate } from '@entities/filters/actions'

import { MainLayout } from '@components/MainLayout'
import Butterfly from '@components/ParrotAndButterfly/Butterfly'

import { authorize } from '@utils/server'
import { getTokenFromCtx } from '@utils/token'
import parseFilters from '@utils/filters/parseFilters'

export default function RedeemPage () {
  return (
    <MainLayout>
      <Redeem />
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

    await store.dispatch(filtersUpdate(parseFilters({ limit: 6, ...ctx.query })))

    return { props: {} }
  })
)
