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
    type: GRID_SMALL,
    Icon: IconGrid4,
  },
  {
    type: GRID_BIG,
    Icon: IconGrid3,
  },
]

export default function CellsViewSwitcher ({ className = '' }) {
  const viewType = useTypedSelector((state) => state.utils.viewType)
  const dispatch = useDispatch()
  return (
    <StyledWrapper className={className}>
      {buttonGroup.map(({ type, Icon }) => {
        return (
          <StyledButton
            key={type}
            isActive={type === viewType}
            onClick={() => dispatch(setViewType(type))}
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
  border: 2px solid rgba(255, 255, 255, 0.1);
  background:linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.075) 0%,
    rgba(255, 255, 255, 0.075) 100%
  );
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
  ${({ isActive }) => isActive && css`
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0.15) 100%
    );
    svg {
      fill: #dadada;
    }
  `}
  svg {
    fill: ${({ theme }) => theme.text.primary};
  }
`
