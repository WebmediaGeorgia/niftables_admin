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
  font-size: 22px;
  font-weight: 600;
  line-height: 35px;
`
