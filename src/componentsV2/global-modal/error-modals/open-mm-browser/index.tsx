// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'

import { BUY_CARD, REDEEM_DETAILS, WITHDRAW_DETAILS } from '@constants/modals'

import { StyledWrapper } from '../common/error-modal-styles'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { setModal } from '@entities/modal/actions'
import useMoveToInitialPoint from '@hooks/modal/useMoveToInitialPoint'
import useMoveToActionPoint from '@hooks/modal/useMoveToActionPoint'
import useClearReservation from '@hooks/modal/useClearReservation'

import Modal from '@commonV2/Modal'
import NavButton from '@shared/NavButton'
import Button from '@commonV2/Button'
import HeadIcon from '../../common/HeadIcon'

export default function OpenMMBrowser () {
  const dispatch = useDispatch()
  const isOwned = useTypedSelector(state => {
    const initialPoint = state.modal.options.initialPoint
    if (initialPoint === REDEEM_DETAILS || initialPoint === WITHDRAW_DETAILS) return true
    return false
  })
  const moveToInitialPoint = useMoveToInitialPoint()
  const moveToActionPoint = useMoveToActionPoint()
	const clearReservation = useClearReservation()

  const parsedDescription = React.useMemo(() => {
    if (isOwned) return 'Unfortunately, it is not possible to connect Metamask from mobile browser. You can open this page in Metamask browser and connect your wallet from there (current session won`t be transferred to Metamask)'
    return 'Unfortunately, it is not possible to connect Metamask from mobile browser. You can open this page in Metamask browser and connect your wallet from there (current session won`t be transferred to Metamask) or you can pay with a credit card.'
  }, [isOwned])

  const closeHandler = React.useCallback(() => {
    moveToInitialPoint()
    clearReservation()
  }, [clearReservation])

  const handleOpenMM = React.useCallback(() => {
    moveToActionPoint()
    clearReservation()
  }, [moveToActionPoint, clearReservation])

  const handlePayWithCard = React.useCallback(() => {
    dispatch(setModal({ viewType: BUY_CARD }))
  }, [dispatch])

  return (
    <Modal
			closeHandler={closeHandler}
			size='l'
		>
      <StyledWrapper>
        <HeadIcon type='cross' />
        <div className='title g-mt-30'>
          Unsuccessful!
        </div>
        <div className='description g-t-align-center g-mt-40'>
          {parsedDescription}
        </div>
        <div className='buttons-wrapper'>
          <NavButton
            className='g-w-100 g-mt-40'
            to={process.env.NEXT_PUBLIC_MM_URL}
            target='_blank'
            size='m'
            color='blue'
            onClick={handleOpenMM}
          >
            Open Metamask browser
          </NavButton>
          {!isOwned && (
            <Button
              className='g-w-100 g-mt-20'
              colorScheme='transparent'
              clickHandler={handlePayWithCard}
            >
              Pay with card
            </Button>
          )}
        </div>
      </StyledWrapper>
    </Modal>
  )
}
