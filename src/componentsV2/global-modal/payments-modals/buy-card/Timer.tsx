// @ts-nocheck
import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'

import { useTypedSelector } from '@hooks/useNewTypedSelector'

import ReservationTimer from '@commonV2/ReservationTimer'

import getEntityLabel from '@utils/entities/getEntityLabel'

export default function Timer () {
  const expiredAt = useTypedSelector((state) => get(state, 'modal.options.reservation.expiredAt'))
  const type = useTypedSelector((state) => get(state, 'modal.options.type'))
	const label = getEntityLabel(type)
	return (
		<StyledWrapper>
			<div className='g-mr-5'>
				{label} reserved for:
			</div>
			<ReservationTimer endDate={expiredAt} />
		</StyledWrapper>
	)
}

const StyledWrapper = styled.div`
  display: flex;
  margin: 20px 0;
`
