import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'

import { PACKS } from '@constants/payments'

import { useTypedSelector } from '@hooks/useNewTypedSelector'

import { renderPrice } from '@utils/parse-utils'

export default function FinalPrice () {
	const type = useTypedSelector(state => get(state, 'modal.options.type'))
	const price = useTypedSelector(state => get(state, 'modal.data.price', 0))
	const gasFee = useTypedSelector(state => get(state, 'modal.data.collection.gasFee', 0))

  const parsedPrice = React.useMemo(() => {
    if (type === PACKS) {
      return renderPrice(price)
    }
    return renderPrice(price, gasFee)
  }, [type, price, gasFee])

	return (
		<StyledWrapper>
			<div className='label'>
				Final Price:
			</div>
			<div className='amount'>
				${parsedPrice}
			</div>
		</StyledWrapper>
	)
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .label {
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
    opacity: 0.5
  }
  .amount {
    font-size: 22px;
    font-weight: 600;
  }
`
