import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'

import { useTypedSelector } from '@hooks/useNewTypedSelector'

export default function Description () {
	const description = useTypedSelector(state => get(state, 'modal.data.description'))
  return (
    <StyledWrapper>
      <div className='label'>
        Description
      </div>
      <div className='value'>
        {description}
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  .label {
    padding: 20px 30px 10px 30px;
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
  }
  .value {
    padding: 10px 30px 20px 30px;
    font-size: 12px;
    line-height: 18px;
  }
`
