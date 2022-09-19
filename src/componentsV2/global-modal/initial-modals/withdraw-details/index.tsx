// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { resetModal } from '@entities/modal/actions'

import Modal from '@commonV2/Modal'
import Preview from './Preview'
import DetailsInfo from './DetailInfo'
import AccordionDetails from './AccordionDetails'
import ActionButton from './ActionButton'
import RevealeDetails from './RevealeDetails'

export default function WithdrawDetails () {
	const dispatch = useDispatch()

	const closeHandler = React.useCallback(() => {
		dispatch(resetModal())
	}, [dispatch])

	return (
		<Modal
			closeHandler={closeHandler}
			size='l'
		>
			<StyledWrapper>
				<Preview />
        <div className='detail-wrapper'>
				  <DetailsInfo />
          <div className='nft-action-details'>
            <ActionButton />
            <RevealeDetails />
          </div>
        </div>
			</StyledWrapper>
			<AccordionDetails />
		</Modal>
	)
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    max-width: 475px;
    margin: 0 auto;
  }
  .media-wrapper {
    position: relative;
    width: 294px;
    height: 294px;
    flex-shrink: 0;
    @media only screen and (max-width: 480px) {
      width: 100%;
      height: 100%;
    }
  }
  .detail-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    padding-left: 30px;
    @media only screen and (max-width: 768px) {
      width: 100%;
      padding: 0;
      margin-top: 10px;
    }
  }

  .nft-action-details {
    display: flex;

    div + div {
      margin-left: 15px;
    }
  }
`
