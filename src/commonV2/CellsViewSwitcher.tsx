// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import styled, { css } from 'styled-components'

import IconGrid4 from 'public/cells/grid-4.svg'
import IconGrid3 from 'public/cells/grid-3.svg'

import { GRID_SMALL, GRID_BIG } from '@constants/view-types'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { setViewType } from '@entities/utils/actions'

const buttonGroup = [
  {
    type: GRID_BIG,
    Icon: IconGrid3,
  },
  {
    type: GRID_SMALL,
    Icon: IconGrid4,
  },
]

export default function CellsViewSwitcher ({ page, className = '' }) {
  const viewType = useTypedSelector((state) => state.utils.viewType)
  const dispatch = useDispatch()

  return (
    <StyledWrapper className={className}>
      {buttonGroup.map(({ type, Icon }) => {
        return (
          <StyledButton
            key={type}
            isActive={type === viewType[page]}
            onClick={() => dispatch(setViewType({ page, type }))}
          >
            <Icon />
          </StyledButton>
        )
      })}
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  position: relative;
  display: inline-flex;
`

const StyledButton = styled.div`
  position: relative;
  flex: 1 1 auto;
  cursor: pointer;
  padding: 5px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.text.secondary};
  background: transparent;
  height: 36px;
  &:not(:first-child) {
    margin-left: -2px;
  }
  &:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right-color: transparent;
    &.isActive {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
  &:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    &.isActive {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
  }
  svg {
    fill: ${({ theme }) => theme.text.secondaryBlue};
  }
  ${({ isActive }) => isActive && css`
    background: ${({ theme }) => theme.text.secondary};
    svg {
      fill: ${({ theme }) => theme.text.white};
    }
  `}
`
