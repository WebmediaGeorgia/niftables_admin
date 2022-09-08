// @ts-nocheck
import { wrapper } from 'src/storage/configureStore';

import { filtersUpdate } from '@entities/filters/actions';
import { getCollectionsRequest } from '@entities/nft_collection/redux/actions';

import Collections from '@containers/Collections';
import { MainLayout } from '@components/MainLayout';

import { authorize } from '@utils/server';
import sanitizeCollectionsRequest from '@utils/filters/sanitizeCollectionsRequest';
import parseFilters from '@utils/filters/parseFilters';

export default function CollectionsPage() {
  return (
    <MainLayout>
      <Collections />
    </MainLayout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  authorize(async (ctx, store) => {
    const data = sanitizeCollectionsRequest(parseFilters(ctx.query));
    await store.dispatch(filtersUpdate(parseFilters(ctx.query)));
    await store.dispatch(getCollectionsRequest(data));
    return {
      props: {},
    };
  })
);
