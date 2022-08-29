// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'

import { REDEEM_DETAILS } from '@constants/modals'

import { StyledWrapper } from '../common/error-modal-styles'

import { setModal } from '@entities/modal/actions'

import Modal from '@commonV2/Modal'
import HeadIcon from '../../common/HeadIcon'
import BackToBrowse from '../common/BackToBrowse'

export default function FailedRedeem () {
  const dispatch = useDispatch()

  const moveToInitialView = React.useCallback(() => {
    dispatch(setModal({ viewType: REDEEM_DETAILS }))
  }, [dispatch])

  return (
    <Modal
      closeHandler={moveToInitialView}
      size='l'
    >
      <StyledWrapper>
        <HeadIcon type='cross' />
        <div className='title g-mt-30'>
          Unsuccessful
        </div>
        <div className='description g-mt-15'>
          Redeem an NFT fails!
        </div>
        <div className='buttons-wrapper'>
					<BackToBrowse />
				</div>
      </StyledWrapper>
    </Modal>
  )
}
