import React from 'react'
import styled, { css } from 'styled-components'

import ArrowDownIcon from 'public/other/arrowDown.svg'
import classnames from "classnames";

export default function SelectLabel ({ isOpen, toggleOptions, selectedOption }) {
  return (
    <StyledWrapper
      isOpen={isOpen}
      onClick={toggleOptions}
      className={classnames({ 'is-open': isOpen })}
    >
      <div className='label' >
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
  padding: 6px 14px;
  border-radius: 6px;
  border: 1px solid #4F83C9;
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
  background-color: transparent;
  background-size: contain;
  cursor: pointer;
  transition: all 0.2s;

  &.is-open {
    background-color: ${({ theme }) => theme.text.white};
    > .label {
      color: ${({ theme }) => theme.text.primary};
    }
  }

  &:hover {
    > .label {
      color: ${({ theme }) => theme.text.secondary};
    }
    background-color: ${({ theme }) => theme.text.white};
  }

  @media only screen and (max-width: 1024px) {
    font-size: 14px;
    padding: 8px 20px 7px 30px;
  }
  .label {
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: ${({ theme }) => theme.text.white};
  }
  .icon {
    flex: 0 0 14px;
    width: 14px;
    height: 7px;
    fill: ${({ theme }) => theme.text.secondary};
  }
  ${({ isOpen }) => isOpen && css`
    .icon {
      transform: rotate(180deg);
    }
  `}
`
