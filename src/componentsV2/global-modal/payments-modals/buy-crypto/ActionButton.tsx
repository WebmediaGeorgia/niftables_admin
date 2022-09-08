// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { CRYPTO_CHECKOUT } from '@constants/modals'

import { setModal } from '@entities/modal/actions'

import Button from '@commonV2/Button'

export default function ActionButton () {
	const dispatch = useDispatch()

  const handleCheckout = React.useCallback(() => {
		dispatch(setModal({ viewType: CRYPTO_CHECKOUT }))
	}, [dispatch])

  return (
    <StyledButton
      clickHandler={handleCheckout}
    >
      Checkout
    </StyledButton>
  )
}

const StyledButton = styled(Button)`
  width: 100%;
  max-width: 300px;
  margin-top: 20px;
`
