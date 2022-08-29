// @ts-nocheck
import React from 'react'
import styled from 'styled-components'

import useMoveToInitialView from '@hooks/modal/useMoveToInitialView'

import Modal from '@commonV2/Modal'
import Preview from './Preview'
import Title from './Title'
import BuyWith from './BuyWith'
import ActionButtons from './ActionButtons'

export default function NftBuyOptions () {
	const moveToInitialView = useMoveToInitialView()
	return (
		<Modal
			closeHandler={moveToInitialView}
			size='l'
		>
			<StyledWrapper>
				<Preview />
				<Title />
        <div className='action-wrapper'>
          <BuyWith />
          <ActionButtons />
        </div>
			</StyledWrapper>
		</Modal>
	)
}

const StyledWrapper = styled.div`
  text-align: center;
  .action-wrapper {
    display: inline-flex;
    flex-direction: column;
    @media only screen and (max-width: 480px) {
      width: 100%;
    }
  }
`
