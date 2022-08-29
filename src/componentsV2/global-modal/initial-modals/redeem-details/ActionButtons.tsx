// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import get from 'lodash/get'

import { REDEEMABLE, ACTIVATABLE } from '@constants/tokens'
import { PRE_WITHDRAW, REDEEM_CONFIRMATION, ACTIVATE_CONFIRMATION } from '@constants/modals'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { setModal } from '@entities/modal/actions'

import Button from '@commonV2/Button';

export default function ActionButtons () {
	const dispatch = useDispatch()
	const utilityStatus = useTypedSelector(state => get(state, 'modal.options.token.utilityStatus'))
	const claimed = useTypedSelector(state => get(state, 'modal.options.token.claimed'))

  const moveToPreWithdraw = React.useCallback(() => {
    dispatch(setModal({ viewType: PRE_WITHDRAW }))
  }, [dispatch])

  const moveToRedeemConfirmation = React.useCallback(() => {
    dispatch(setModal({ viewType: REDEEM_CONFIRMATION }))
  }, [dispatch])

  const moveToActivateConfirmation = React.useCallback(() => {
    dispatch(setModal({ viewType: ACTIVATE_CONFIRMATION }))
  }, [dispatch])

  return (
    <StyledWrapper>
      {utilityStatus === REDEEMABLE && (
        <Button clickHandler={moveToRedeemConfirmation}>
          Redeem
        </Button>
      )}
      {utilityStatus === ACTIVATABLE && (
        <Button
          clickHandler={moveToActivateConfirmation}
        >
          Activate
        </Button>
      )}
      {!claimed && (
        <Button
          colorScheme='transparent'
          clickHandler={moveToPreWithdraw}
        >
          Withdraw
        </Button>
      )}
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  gap: 15px;
  @media only screen and (max-width: 480px) {
    display: block;
  }
`
