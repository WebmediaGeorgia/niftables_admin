// @ts-nocheck
import React from 'react'
import styled from 'styled-components'

import { useTypedSelector } from '@hooks/useNewTypedSelector'

export default function Description () {
  const description = useTypedSelector((state) => state.collection.collection?.description)
  if (!description) return null
  return (
    <StyledWrapper>
      {description}
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  max-width: 585px;
  margin: 20px auto 0;
  padding: 0 20px;
  text-align: center;
`
