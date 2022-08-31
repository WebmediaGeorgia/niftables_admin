// @ts-nocheck
import { wrapper } from 'src/storage/configureStore';

import { filtersUpdate } from '@entities/filters/actions';
import { fetchCollection } from '@entities/collection/actions';
import { getCollectionNFTsRequest } from '@entities/nft/redux/actions';

import CollectionNfts from '@containers/CollectionNfts';
import { MainLayout } from '@components/MainLayout';

import { authorize } from '@utils/server';
import sanitizeCollectionNftsRequest from '@utils/filters/sanitizeCollectionNftsRequest';
import parseFilters from '@utils/filters/parseFilters';
import Butterfly from '@components/ParrotAndButterfly/Butterfly';

export default function CollectionNftsPage() {
  return (
    <MainLayout>
      <CollectionNfts />
    </MainLayout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  authorize(async (ctx, store) => {
    const data = sanitizeCollectionNftsRequest(parseFilters(ctx.query));
    await store.dispatch(filtersUpdate(parseFilters(ctx.query)));
    const requests = [
      store.dispatch(getCollectionNFTsRequest(data)),
      store.dispatch(fetchCollection(ctx.query.id)),
    ];
    await Promise.all(requests);
    return {
      props: {},
    };
  })
);
