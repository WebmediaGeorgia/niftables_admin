// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { NFT } from '@constants/payments'
import { REDEEM_DETAILS, ACTIVATE } from '@constants/modals'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { setModal } from '@entities/modal/actions'

import Modal from '@commonV2/Modal'
import MediaPreview from '@commonV2/media-preview'
import Button from '@commonV2/Button'

export default function ActivateConfirmation () {
  const dispatch = useDispatch()
  const nft = useTypedSelector(state => state.modal.data)

  const moveToInitialView = React.useCallback(() => {
    dispatch(setModal({ viewType: REDEEM_DETAILS }))
  }, [dispatch])

  const moveToActivate = React.useCallback(() => {
    dispatch(setModal({ viewType: ACTIVATE }))
  }, [dispatch])

  return (
    <Modal
			closeHandler={moveToInitialView}
			size='l'
		>
      <StyledWrapper>
        <div className='media-wrapper'>
          <MediaPreview
            data={nft}
            type={NFT}
          />
        </div>
        <div className='title g-mt-20'>
          {nft.name}
        </div>
        <div className='description g-mt-5'>
          Please, confirm that you want to activate selected NFT
        </div>
        <Button
          className='button g-mt-20'
          clickHandler={moveToActivate}
        >
          Activate NFT
        </Button>
      </StyledWrapper>
    </Modal>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0;
  .media-wrapper {
    position: relative;
    width: 160px;
    height: 160px;
  }
  .title {
    font-weight: 700;
    font-size: 26px;
    line-height: 36px;
  }
  .description {
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
  }
  .button {
    min-width: 280px;
  }
`
