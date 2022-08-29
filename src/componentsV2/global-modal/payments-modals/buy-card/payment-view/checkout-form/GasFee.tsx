import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'

import { PACKS } from '@constants/payments'

import { useTypedSelector } from '@hooks/useNewTypedSelector'

import { renderPrice } from '@utils/parse-utils'

export default function GasFee () {
	const type = useTypedSelector(state => get(state, 'modal.options.type'))
	const price = useTypedSelector(state => get(state, 'modal.data.price', 0))
	const gasFee = useTypedSelector(state => get(state, 'modal.data.collection.gasFee', 0))

	if (type === PACKS || !gasFee) return null

	return (
		<StyledWrapper>
			<div className='price'>
				<div className='label'>
					Token Price:
				</div>
				<div className='amount'>
					${renderPrice(price)}
				</div>
			</div>
			<div className='fee'>
				<div className='label'>
					Minting fee:
				</div>
				<div className='amount'>
					${renderPrice(gasFee)}
				</div>
			</div>
		</StyledWrapper>
	)
}

const StyledWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  padding-bottom: 50px;
  border-bottom: solid 1px #ebf2f8;
  .price,
  .fee {
    .label {
      font-size: 12px;
      line-height: 18px;
    }
    .amount {
      font-size: 12px;
      font-weight: 600;
      line-height: 18px;
    }
  }
  .price {
    margin-right: 3rem;
  }
`
