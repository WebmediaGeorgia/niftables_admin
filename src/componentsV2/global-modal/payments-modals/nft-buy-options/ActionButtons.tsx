// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { RESERVATION, PRE_CRYPTO_CHECKOUT } from '@constants/modals'
import { CARD } from '@constants/payments'

import { setModal, setModalOptions } from '@entities/modal/actions'
import useMoveToInitialView from '@hooks/modal/useMoveToInitialView'

import Button from '@commonV2/Button'

export default function ActionButtons () {
  const dispatch = useDispatch()
	const moveToInitialView = useMoveToInitialView()

	const moveToBuyCard = React.useCallback(() => {
		dispatch(setModalOptions({ method: CARD }))
		dispatch(setModal({ viewType: RESERVATION }))
	}, [dispatch])

	const moveToBuyCrypto = React.useCallback(() => {
		dispatch(setModal({ viewType: PRE_CRYPTO_CHECKOUT }))
	}, [dispatch])

  return (
    <StyledWrapper>
      <Button
        className='button'
        clickHandler={moveToBuyCard}
      >
        Card
      </Button>
      <Button
        className='button'
        clickHandler={moveToBuyCrypto}
      >
        Crypto
      </Button>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  margin-top: 30px;

  .button {
    width: 292px;
  }

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    gap: 20px;
  }
`
