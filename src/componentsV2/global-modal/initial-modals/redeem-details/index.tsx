// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import get from 'lodash/get'

import { NFT } from '@constants/payments'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { resetModal } from '@entities/modal/actions'

import Modal from '@commonV2/Modal'
import MediaPreview from '@commonV2/media-preview'
import Preview from './Preview'
import DetailsInfo from './DetailInfo'
import AccordionDetails from './AccordionDetails'
import ActionButtons from './ActionButtons'

export default function RedeemDetails () {
	const dispatch = useDispatch()
	const nft = useTypedSelector(state => get(state, 'modal.data', {}))

	const closeHandler = React.useCallback(() => {
		dispatch(resetModal())
	}, [dispatch])

	return (
		<Modal
			closeHandler={closeHandler}
			size='l'
		>
			<StyledWrapper>
        <div className='main-container'>
          <Preview />
          <DetailsInfo />
        </div>
        <div className='sub-container'>
          <AccordionDetails />
        </div>
			</StyledWrapper>
		</Modal>
	)
}

const StyledWrapper = styled.div`
  .main-container {
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      max-width: 475px;
      margin: 0 auto;
    }
  }
  .sub-container {
    margin-top: 25px;
    @media only screen and (max-width: 768px) {
      max-width: 475px;
      margin: 25px auto 0;
    }
  }
`
