// @ts-nocheck
import { RATE_LIMIT } from '@constants/modals'

import { setModal } from '@entities/modal/actions'

export default function rateLimit () {
  const _getStore = require('src/storage/configureStore')._getStore
  _getStore().dispatch(setModal({ viewType: RATE_LIMIT }))
}
