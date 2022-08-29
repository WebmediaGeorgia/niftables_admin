// @ts-nocheck
import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import useMoveToInitialView from '@hooks/modal/useMoveToInitialView'

import Modal from '@commonV2/Modal'
import Preview from './Preview'
import BackToDetails from './BackToDetails'
import Timer from './Timer'
import MintingNote from './MintingNote'
import PaymentView from './payment-view'

export default function BuyCard () {
	const data = useTypedSelector(state => get(state, 'modal.data', {}))
	const moveToInitialView = useMoveToInitialView()

	return (
		<Modal
			closeHandler={moveToInitialView}
			size='l'
		>
			<StyledWrapper>
        <div className='left-col'>
          <Preview data={data} />
          <BackToDetails />
          <Timer />
          <MintingNote />
        </div>
        <div className='right-col'>
          <PaymentView />
        </div>
			</StyledWrapper>
		</Modal>
	)
}

const StyledWrapper = styled.div`
  display: flex;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    max-width: 475px;
    margin: 0 auto;
  }
  .left-col {
    width: 100%;
    max-width: 294px;
    @media only screen and (max-width: 768px) {
      max-width: unset;
      margin: 0 auto;
    }
  }
  .right-col {
    flex-grow: 1;
    margin-left: 30px;
    @media only screen and (max-width: 768px) {
      margin-top: 20px;
      margin-left: 0;
    }
  }
`
