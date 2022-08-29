// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import get from 'lodash/get'

import { PRE_WITHDRAW } from '@constants/modals'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { setModal } from '@entities/modal/actions'

import Button from '@commonV2/Button';

export default function ActionButton () {
	const dispatch = useDispatch()
	const claimed = useTypedSelector(state => get(state, 'modal.options.token.claimed'))

  const moveToPreWithdraw = React.useCallback(() => {
    dispatch(setModal({ viewType: PRE_WITHDRAW }))
  }, [dispatch])

  return (
    <StyledWrapper>
      {!claimed && (
        <Button
          className='button'
          clickHandler={moveToPreWithdraw}
        >
          Withdraw
        </Button>
      )}
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  @media only screen and (max-width: 480px) {
    margin-top: 15px;
  }
  .button {
    @media only screen and (max-width: 480px) {
      width: 100%;
    }
  }
`
