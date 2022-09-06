// @ts-nocheck
import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'

import { useTypedSelector } from '@hooks/useNewTypedSelector'

import ReservationTimer from '@commonV2/ReservationTimer'

import getEntityLabel from '@utils/entities/getEntityLabel'

export default function ReservationBlock () {
	const type = useTypedSelector(state => get(state, 'modal.options.type'))
	const expiredAt = useTypedSelector(state => get(state, 'modal.options.reservation.expiredAt'))
	const label = getEntityLabel(type)
	return (
		<StyledWrapper className='g-d-flex g-justify-center g-align-center g-mt-20'>
			<div className='timer'>
				{label} Reserved for:
			</div>
			&nbsp;
			<ReservationTimer
				className='timer'
				endDate={expiredAt}
			/>
		</StyledWrapper>
	)
}

const StyledWrapper = styled.div`
  .timer {
    font-weight: 300;
    font-size: 15px;
    line-height: 22px;
    color: #FFFFFF;
    opacity: 0.6;
  }
`
