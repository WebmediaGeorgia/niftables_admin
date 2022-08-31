import React from 'react'
import styled, { css } from 'styled-components'

import Option from './Option'

export default function OptionsList ({
  isOpen, options, selectedOption, changeHandler, closeOptions
}) {
  return (
    <StyledWrapper isOpen={isOpen}>
      {options.map((option) => {
        return (
          <Option
            key={option.value}
            option={option}
            selectedOption={selectedOption}
            changeHandler={changeHandler}
            closeOptions={closeOptions}
          />
        )
      })}
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 250px;
  min-height: 50px;
  max-height: 300px;
  margin-top: 3px;
  padding: 10px 0;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 8px;
  color: ${({ theme }) => theme.text.primary };
  background: ${({ theme }) => theme.text.white };
  backdrop-filter: blur(92px);
  visibility: hidden;
  opacity: 0;
  overflow: hidden;
  overflow-y: auto;
  box-shadow: 0px 5px 30px rgba(24, 47, 67, 0.2);
  transition: visibility 0s, opacity 0.2s ease-in-out;
  z-index: 4;
  ${({ isOpen }) => isOpen && css`
    visibility: visible;
    opacity: 1;
  `}
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 6px;
    background: #ebf2f8;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background: ${({ theme }) => theme.text.secondary};
  }
`
