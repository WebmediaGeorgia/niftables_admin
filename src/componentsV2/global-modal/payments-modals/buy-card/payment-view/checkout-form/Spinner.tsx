import React from 'react'
import styled from 'styled-components'

import Loader from '@commonV2/Loader'

export default function Spinner ({ isLoading }) {
  if (!isLoading) return null
  return (
    <StyledWrapper>
      <Loader />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 480px;
  z-index: 100;
  @media only screen and (max-width: 768px) {
    min-height: 160px;
  }
`
