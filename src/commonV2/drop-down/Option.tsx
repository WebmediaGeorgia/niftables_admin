import React from 'react'
import styled, { css } from 'styled-components'

export default function Option ({ option, selectedOption, changeHandler, closeOptions }) {
  const selectOption = React.useCallback(() => {
    changeHandler(option)
    closeOptions()
  }, [changeHandler, option, closeOptions])
  return (
    <StyledWrapper
      isActive={option.value === selectedOption.value}
      onClick={selectOption}
    >
      {option.label}
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  column-gap: 5px;
  padding: 7px 10px 7px 14px;
  font-weight: 300;
  font-size: 15px;
  line-height: 22px;
  color: ${({ theme }) => theme.text.primary};

  &:hover {
    color: ${({ theme }) => theme.text.white};
    background-color: ${({ theme }) => theme.text.secondary};
    opacity: 0.5;
  }

  cursor: pointer;
  ${({ isActive }) => isActive && css`
    background: ${({ theme }) => theme.text.secondary};
    color: ${({ theme }) => theme.text.white};
    cursor: default;
  `}
`
