import React from 'react'
import BeatLoader from 'react-spinners/BeatLoader';
import styled from 'styled-components'

export default function Loader () {
  return (
    <StyledWrapper>
      <BeatLoader
        loading
        margin={10}
        size={20}
        speedMultiplier={1}
      />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  > span {
    > span {
      background: ${({ theme }) => theme.text.secondary};
    }
  }
`
