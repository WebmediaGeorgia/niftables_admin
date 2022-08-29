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
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  color: ${({ theme }) => theme.text.primary};
  cursor: pointer;
  ${({ isActive }) => isActive && css`
    background: rgba(255, 255, 255, 0.5);
    cursor: default;
  `}
`
