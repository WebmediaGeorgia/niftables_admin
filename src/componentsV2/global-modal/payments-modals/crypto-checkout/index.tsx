import React from 'react'
import { ethers } from 'ethers'
import { toast } from 'react-toastify'
import styled from 'styled-components'

import MetamaskFox from '/public/other/metamask_fox.svg'

import { CRYPTO_CHECKOUT } from '@constants/modals'
import { errorsConfig, PURCHASE_FAILED } from '@constants/payments-errors'

import { _getStore } from 'src/storage/configureStore'
import useMoveToBuyOptions from '@hooks/modal/useMoveToBuyOptions'
import useMoveToSuccessView from '@hooks/modal/useMoveToSuccessView'
import useBaseMMCheck from '@hooks/modal/useBaseMMCheck'

import Modal from '@commonV2/Modal'

import fetchCryptoPurchaseData from '@utils/metamask/fetchCryptoPurchaseData'
import getItemId from '@utils/metamask/getItemId'
import checkGas from '@utils/metamask/checkGas'
import sendTransaction from '@utils/metamask/sendTransaction'
import completeCryptoPurchase from '@utils/metamask/completeCryptoPurchase'

export default function CryptoCheckout () {
	const moveToBuyOptions = useMoveToBuyOptions()
	const moveToSuccessView = useMoveToSuccessView()
	const baseMMCheck = useBaseMMCheck({ referrer: CRYPTO_CHECKOUT })

	React.useEffect(() => {
		async function init () {
			const isReady = await baseMMCheck()
			if (!isReady) return
			const type = _getStore().getState().modal.options.type
			const id = _getStore().getState().modal.data.id
			const collectionId = _getStore().getState().modal.data.collection?.id
			const purchaseData = await fetchCryptoPurchaseData({ type, id })
			if (!purchaseData) {
				moveToBuyOptions()
				return
			}
			const { data, gas, to, value } = purchaseData
			const itemId = getItemId({ type, purchaseData })
			if (!data || !gas || !to || !value || !itemId) {
				toast.error(errorsConfig[PURCHASE_FAILED])
				moveToBuyOptions()
				return
			}
			const metamaskAddress = _getStore().getState().user.metamaskAddress
			const transactionParameters = {
        gas: ethers.utils.hexValue(ethers.BigNumber.from(gas)),
        to,
        from: metamaskAddress,
        data,
        value: ethers.utils.hexValue(ethers.BigNumber.from(value)),
      }
			const isGasValid = await checkGas({ transactionParameters })
			if (!isGasValid) {
				moveToBuyOptions()
				return
			}
			const transactionHash = await sendTransaction({ transactionParameters })
			if (!transactionHash) {
				moveToBuyOptions()
				return
			}
			const isSuccess = await completeCryptoPurchase({
        type,
        itemId,
        transactionHash,
        collectionId
      })
			if (!isSuccess) {
				moveToBuyOptions()
				return
			}
			moveToSuccessView()
		}
		init()
	}, [])

	return (
		<Modal
			closeHandler={moveToBuyOptions}
			size='l'
		>
			<StyledWrapper>
				<MetamaskFox />
				<span>
          Metamask wallet is launched
        </span>
			</StyledWrapper>
		</Modal>
	)
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
	padding-bottom: 30px;
  span {
    font-size: 22px;
    font-weight: 600;
  }
  svg {
    width: 300px;
    height: 300px;
  }
`
