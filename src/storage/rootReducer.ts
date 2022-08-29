import { combineReducers } from 'redux'
import auth from '../entities/auth/redux/slice'
import nft from '../entities/nft/redux/slice'
import nftCollection from '../entities/nft_collection/redux/slice'
import user from '../entities/user/redux/slice'
import pack from '../entities/pack/redux/slice'
import filter from '../entities/filters/slice'
import notification from '../entities/notification/redux/slice'
import configuration from '../entities/configuration/redux/slice'
import utils from '../entities/utils/slice'
import collections from '../entities/collections/slice'
import collection from '../entities/collection/slice'
import userNftTokens from '../entities/user-nft-tokens/slice'
import userPacks from '../entities/user-packs/slice'
import likedNfts from '../entities/liked-nfts/slice'
import reservation from '../entities/reservations/redux/slice'
import modal from '../entities/modal/slice'
import redeem from '../entities/redeem/slice'
import globalPreview from '../entities/global-preview/slice'

const rootReducer = combineReducers({
  nftCollection,
  nft,
  pack,
  auth,
  user,
  filter,
  notification,
  configuration,
  utils,
	collections,
	collection,
	userNftTokens,
	userPacks,
	likedNfts,
  reservation,
	modal,
  redeem,
  globalPreview
})

export default rootReducer
