// @ts-nocheck
import React from 'react'
import get from 'lodash/get'
import styled from 'styled-components'

import { useTypedSelector } from '@hooks/useNewTypedSelector'

import Title from '../../../common/details/Title'
import User from '../../../common/details/User'
import Collection from './Collection'
import SoldOut from './SoldOut'
import BadgesList from './BadgesList'
import BuyButton from './BuyButton'

export default function DetailInfo () {
	const pack = useTypedSelector(state => get(state, 'modal.data', {}))
  return (
    <StyledWrapper>
      <div>
        <Title item={pack} />
        <User
          label='Owner'
          item={pack}
        />
        <Collection pack={pack} />
        <SoldOut pack={pack} />
        <BadgesList pack={pack} />
      </div>
      <BuyButton />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
	flex-grow: 1;
	padding-left: 30px;
	width: 100%;
	@media only screen and (max-width: 768px) {
		padding: 0;
		margin-top: 10px;
	}
`
