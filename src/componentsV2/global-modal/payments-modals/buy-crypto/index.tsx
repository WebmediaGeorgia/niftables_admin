// @ts-nocheck
import React from 'react'
import styled from 'styled-components'

import useMoveToBuyOptions from '@hooks/modal/useMoveToBuyOptions'

import Modal from '@commonV2/Modal'
import Preview from './Preview'
import Title from './Title'
import ReservationBlock from './ReservationBlock'
import PriceBlock from './PriceBlock'
import Hint from './Hint'
import ActionButton from './ActionButton'

export default function BuyCrypto () {
	const moveToBuyOptions = useMoveToBuyOptions()

	return (
		<Modal
			closeHandler={moveToBuyOptions}
			size='l'
		>
			<StyledWrapper>
				<Preview />
				<Title />
				<ReservationBlock />
				<PriceBlock />
        <Hint />
        <ActionButton />
			</StyledWrapper>
		</Modal>
	)
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
