import React from 'react'
import styled, { css } from 'styled-components'

import ArrowDownIcon from 'public/other/arrowDown.svg'

export default function SelectLabel ({ isOpen, toggleOptions, selectedOption }) {
  return (
    <StyledWrapper
      isOpen={isOpen}
      onClick={toggleOptions}
    >
      <div className='label'>
        {selectedOption.label}
      </div>
      <ArrowDownIcon className='icon' />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 12px;
  padding: 13px 30px 14px 20px;
  border-radius: 50px;
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
  background: url(/assets/img/jungle/button_sorting.webp) no-repeat 50% 0;
  background-position: center center;
  background-size: contain;
  cursor: pointer;
  @media only screen and (max-width: 1024px) {
    font-size: 14px;
    padding: 8px 20px 7px 30px;
  }
  .label {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .icon {
    flex: 0 0 14px;
    width: 14px;
    height: 7px;
    fill: ${({ theme }) => theme.text.primary};
  }
  ${({ isOpen }) => isOpen && css`
    .icon {
      transform: rotate(180deg);
    }
  `}
`
