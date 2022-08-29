import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'

import { useTypedSelector } from '@hooks/useNewTypedSelector'

export default function Title () {
	const name = useTypedSelector(state => get(state, 'modal.data.name', ''))
  return (
    <StyledWrapper>
      {name}
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  margin-top: 20px;
  font-size: 22px;
  font-weight: 600;
  line-height: 35px;
  text-align: center;
`
