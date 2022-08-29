// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { WITHDRAW } from '@constants/modals'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { setModal } from '@entities/modal/actions'
import useMoveToInitialPoint from '@hooks/modal/useMoveToInitialPoint'

import Modal from '@commonV2/Modal'
import CommonBadge from '@commonV2/badges/CommonBadge'
import Button from '@commonV2/Button'
import HeadIcon from '../../common/HeadIcon'

import formatAddress from '@utils/metamask/formatAddress'

export default function WithdrawConfirmation () {
  const dispatch = useDispatch()
  const metamaskAddress = useTypedSelector((state) => state.user.metamaskAddress)
  const moveToInitialPoint = useMoveToInitialPoint()

  const moveToWithdraw = React.useCallback(() => {
    dispatch(setModal({ viewType: WITHDRAW }))
  }, [dispatch])

  return (
    <Modal
			closeHandler={moveToInitialPoint}
			size='l'
		>
			<StyledWrapper >
				<HeadIcon type='in-wallet' />
				<div className='title g-mt-30'>
          Withdraw an NFT
				</div>
				<div className='description g-mt-15'>
          You are about to withdraw an NFT to the wallet
          <CommonBadge
            className='g-ml-5'
            label={formatAddress(metamaskAddress)}
          />
				</div>
				<div className='buttons-wrapper g-mt-30'>
          <Button
            className='accept'
            clickHandler={moveToWithdraw}
          >
            Continue
          </Button>
          <Button
            className='reject'
            colorScheme='transparent'
            clickHandler={moveToInitialPoint}
          >
            No
          </Button>
				</div>
			</StyledWrapper>
		</Modal>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;
  .title {
    font-size: 20px;
    font-weight: 500;
    line-height: 23px;
    color: ${({ theme }) => theme.text.primary}
  }
  .description {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    color: ${({ theme }) => theme.text.primary}
  }
  .buttons-wrapper {
    display: flex;
    @media only screen and (max-width: 480px) {
      display: block;
    }
    .accept {
      min-width: 200px;
      @media only screen and (max-width: 480px) {
        width: 100%;
      }
    }
    .reject {
      min-width: 135px;
      margin-left: 15px;
      @media only screen and (max-width: 480px) {
        width: 100%;
        margin: 15px 0 0 0;
      }
    }
  }
`
