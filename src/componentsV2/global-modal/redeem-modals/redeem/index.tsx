// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import { ethers } from 'ethers';

import { REDEEM_DETAILS, REDEEM, FAILED_REDEEM, REDEEM_SUCCESS } from '@constants/modals'

import { _getStore } from 'src/storage/configureStore'
import { setModal } from '@entities/modal/actions'
import useBaseMMCheck from '@hooks/modal/useBaseMMCheck'
import { redeemNftUtility } from '@requests/nfts'

import ModalLoading from '../../modal-loading'

import fetchRedeemData from '@utils/metamask/fetchRedeemData'
import checkGas from '@utils/metamask/checkGas'
import sendTransaction from '@utils/metamask/sendTransaction'
import completeRedeem from '@utils/metamask/completeRedeem'

export default function Redeem () {
	const dispatch = useDispatch()
	const baseMMCheck = useBaseMMCheck(REDEEM)

  const moveToInitialView = React.useCallback(() => {
    dispatch(setModal({ viewType: REDEEM_DETAILS }))
  }, [dispatch])

  React.useEffect(() => {
    async function init () {
      const { id, claimed } = _getStore().getState().modal.options.token
      if (!claimed) {
        const isSuccess = await redeemNftUtility({ tokenId: id })
        if (!isSuccess) {
          dispatch(setModal({ viewType: FAILED_REDEEM }))
          return
        }
        dispatch(setModal({ viewType: REDEEM_SUCCESS }))
        return
      }
      const isReady = await baseMMCheck()
      if (!isReady) return
      const redeemData = await fetchRedeemData(id)
      if (!redeemData) {
				moveToInitialView()
				return
			}
      const { from, gas, to, data } = redeemData;
      const transactionParameters = {
        gas: ethers.utils.hexValue(ethers.BigNumber.from(gas)),
        to,
        from,
        data,
        value: ethers.utils.hexValue(0),
      }
      const isGasValid = await checkGas({ transactionParameters })
      if (!isGasValid) {
				moveToInitialView()
				return
			}
      const transactionHash = await sendTransaction({ transactionParameters })
			if (!transactionHash) {
				moveToInitialView()
				return
			}
      const isSuccess = await completeRedeem({ tokenId: id, transactionHash })
      if (!isSuccess) {
				dispatch(setModal({ viewType: FAILED_REDEEM }))
				return
			}
      dispatch(setModal({ viewType: REDEEM_SUCCESS }))
    }
    init()
  }, [])

  return <ModalLoading closeHandler={moveToInitialView} />
}
