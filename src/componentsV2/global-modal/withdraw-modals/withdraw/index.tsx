// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'

import { REDEEM_DETAILS, FAILED_WITHDRAW, WITHDRAW_SUCCESS } from '@constants/modals'

import { _getStore } from 'src/storage/configureStore'
import { setModal } from '@entities/modal/actions'
import { claimNft } from '@requests/nfts'

import ModalLoading from '../../modal-loading'

export default function Withdraw () {
	const dispatch = useDispatch()

  const moveToInitialView = React.useCallback(() => {
    dispatch(setModal({ viewType: REDEEM_DETAILS }))
  }, [dispatch])

  React.useEffect(() => {
    async function init () {
      const id = _getStore().getState().modal.options.token.id
      const res = await claimNft({ tokenIds: [id] })
      if (!res) {
        dispatch(setModal({ viewType: FAILED_WITHDRAW }))
        return
      }
      dispatch(setModal({ viewType: WITHDRAW_SUCCESS }))
    }
    init()
  }, [])

  return <ModalLoading closeHandler={moveToInitialView} />
}
