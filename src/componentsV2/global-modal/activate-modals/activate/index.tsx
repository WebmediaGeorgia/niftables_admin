// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'

import { REDEEM_DETAILS, FAILED_ACTIVATE, REDEEM_SUCCESS } from '@constants/modals'

import { _getStore } from 'src/storage/configureStore'
import { setModal } from '@entities/modal/actions'
import { redeemNftUtility } from '@requests/nfts'

import ModalLoading from '../../modal-loading'

export default function Activate () {
	const dispatch = useDispatch()

  const moveToInitialView = React.useCallback(() => {
    dispatch(setModal({ viewType: REDEEM_DETAILS }))
  }, [dispatch])

  React.useEffect(() => {
    async function init () {
      const id = _getStore().getState().modal.options.token.id
      const isSuccess = await redeemNftUtility({ tokenId: id })
      if (!isSuccess) {
        dispatch(setModal({ viewType: FAILED_ACTIVATE }))
        return
      }
      dispatch(setModal({ viewType: REDEEM_SUCCESS }))
      return
    }
    init()
  }, [])

  return <ModalLoading closeHandler={moveToInitialView} />
}
