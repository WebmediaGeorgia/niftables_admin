// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'

import {
	REDEEM_DETAILS, PRE_WITHDRAW, WITHDRAW_CONFIRMATION,
  INSTALL_WALLET, CONNECT_WALLET, CHANGE_WALLET
} from '@constants/modals'

import { _getStore } from 'src/storage/configureStore'
import { setModal, setModalOptions } from '@entities/modal/actions'

import ModalLoading from '../../modal-loading'

import checkMMInstalled from '@utils/metamask/checkMMInstalled'
import checkMMConnected from '@utils/metamask/checkMMConnected'

export default function PreWithdraw () {
	const dispatch = useDispatch()

  const moveToInitialView = React.useCallback(() => {
    dispatch(setModal({ viewType: REDEEM_DETAILS }))
  }, [dispatch])

	React.useEffect(() => {
		async function init () {
			const isInstalled = checkMMInstalled() // check MM extension
      if (!isInstalled) {
        dispatch(setModalOptions({ referrer: PRE_WITHDRAW }))
        dispatch(setModal({ viewType: INSTALL_WALLET }))
        return false
      }
      const MMAddress = await checkMMConnected() // check adding domain to MM
      if (!MMAddress) {
        dispatch(setModalOptions({ referrer: PRE_WITHDRAW }))
        dispatch(setModal({ viewType: CONNECT_WALLET }))
        return false
      }
      const currentAddress = _getStore().getState().user.metamaskAddress // check address in DB
      if (!currentAddress) {
        dispatch(setModalOptions({ referrer: PRE_WITHDRAW }))
        dispatch(setModal({ viewType: CONNECT_WALLET }))
        return false
      }
      if (currentAddress !== MMAddress) {
        dispatch(setModalOptions({ referrer: PRE_WITHDRAW }))
        dispatch(setModal({ viewType: CHANGE_WALLET })) // check equality DB and MM
        return false
      }
			dispatch(setModal({ viewType: WITHDRAW_CONFIRMATION }))
		}
		init()
	}, [])

  return <ModalLoading closeHandler={moveToInitialView} />
}
