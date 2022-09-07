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
  margin-top: 30px;
  font-weight: 700;
  font-size: 26px;
  line-height: 36px;
  text-align: center;
`
