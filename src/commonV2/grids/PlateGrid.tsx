import React from 'react'
import styled from 'styled-components'

import { GRID_BIG } from '@constants/view-types'

import { useTypedSelector } from '@hooks/useNewTypedSelector'

export default function PlateGrid ({ page, viewType, className = '', children }) {
  const isLarge = useTypedSelector((state) => viewType
    ? viewType === GRID_BIG
    : state.utils.viewType[page] === GRID_BIG
  )
  const isOpen = useTypedSelector((state) => state.utils.isFilterOpen)
  return (
    <StyledWrapper
      className={className}
      isLarge={isLarge}
      isOpen={isOpen}
    >
      {children}
    </StyledWrapper>
  )
}

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ isLarge, isOpen }) => (4 - (isLarge ? 1 : 0) - (isOpen ? 1 : 0 ))}, 1fr);
  grid-template-rows: min-content;
  grid-gap: 30px;
  align-items: flex-start;
  width: 100%;
  @media only screen and (max-width: 1439px) {
    grid-template-columns: repeat(${({ isLarge, isOpen }) => (3 - (isLarge ? 1 : 0) - (isOpen ? 1 : 0 ))}, 1fr);
  }
  @media only screen and (max-width: 850px) {
    grid-template-columns: repeat(${({ isOpen }) => 2 - (isOpen ? 1 : 0 )}, 1fr);
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
