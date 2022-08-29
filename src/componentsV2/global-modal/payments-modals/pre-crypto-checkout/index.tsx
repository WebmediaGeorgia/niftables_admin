// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { PRE_CRYPTO_CHECKOUT, RESERVATION } from '@constants/modals'
import { CRYPTO } from '@constants/payments'

import { _getStore } from 'src/storage/configureStore'
import { setModal, setModalOptions } from '@entities/modal/actions'
import useMoveToBuyOptions from '@hooks/modal/useMoveToBuyOptions'
import useBaseMMCheck from '@hooks/modal/useBaseMMCheck'

import ModalLoading from '../../modal-loading'

export default function PreCryptoCheckout () {
	const dispatch = useDispatch()
	const moveToBuyOptions = useMoveToBuyOptions()
	const baseMMCheck = useBaseMMCheck(PRE_CRYPTO_CHECKOUT)

	React.useEffect(() => {
		async function init () {
			const isSuccess = await baseMMCheck()
			if (!isSuccess) return
			dispatch(setModalOptions({ method: CRYPTO }))
			dispatch(setModal({ viewType: RESERVATION }))
		}
		init()
	}, [])

  return <ModalLoading closeHandler={moveToBuyOptions} />
}
