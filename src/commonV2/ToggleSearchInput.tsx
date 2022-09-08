// @ts-nocheck
import React from 'react'
import styled, { css } from 'styled-components'
import debounce from 'lodash/debounce'

import SearchInputIcon from 'public/field-icons/search.svg'

export default function ToggleSearchInput ({
  className = '', placeholder = '', value = '', searchHandler
}) {
  const isMounted = React.useRef(false)
  const [isOpen, setIsOpen] = React.useState(false)
  const [localValue, setLocalValue] = React.useState(value)

  const debounced = React.useRef(
    debounce((searchText) => {
      searchHandler(searchText)
    }, 500)
  )

  const toggleOpen = React.useCallback(() => {
    setIsOpen(current => !current)
  }, [setIsOpen])

  React.useEffect(() => {
    if (isMounted.current) debounced.current(localValue)
  }, [isMounted, localValue])

  React.useEffect(() => {
    isMounted.current = true
    return () => {
      isMounted.current = false
    }
  }, [isMounted])

  return (
    <StyledWrapper
      className={className}
      isOpen={isOpen}
    >
      <div
        className='search-icon'
        onClick={toggleOpen}
      >
        <SearchInputIcon className='icon' />
      </div>
      <input
        className='input'
        type='search'
        placeholder={placeholder}
        autoComplete='off'
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
      />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 36px;
  max-width: 36px;
  height: 36px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.075) 0%,
    rgba(255, 255, 255, 0.075) 100%
  );
  overflow: hidden;
  ${({ isOpen }) => isOpen && css`
    width: 100%;
    height: 50px;
    max-width: 480px;
    padding: 7px 16px;
    border-radius: 35px;
    outline: solid 1px #fff;
  `}
  transition: all 0.2s;
  @media only screen and (max-width: 1024px) {
    height: 36px;
    ${({ isOpen }) => isOpen && css`
      padding: 7px;
    `}
  }
  @media only screen and (max-width: 768px) {
    ${({ isOpen }) => isOpen && css`
      max-width: 380px;
    `}
  }
  .search-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 36px;
    height: 100%;
    cursor: pointer;
    .icon {
      width: 24px;
      height: 24px;
      path {
        fill: #fff;
      }
    }
  }
  .input {
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    color: #fff;
    background: transparent;
    border: none;
    outline: none;
    ${({ isOpen }) => !isOpen && css`
      opacity: 0;
      padding: 0;
      width: 0;
    `}
    ::-webkit-search-cancel-button {
      -webkit-appearance: none;
      height: 14px;
      width: 14px;
      display: block;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAn0lEQVR42u3UMQrDMBBEUZ9WfQqDmm22EaTyjRMHAlM5K+Y7lb0wnUZPIKHlnutOa+25Z4D++MRBX98MD1V/trSppLKHqj9TTBWKcoUqffbUcbBBEhTjBOV4ja4l4OIAZThEOV6jHO8ARXD+gPPvKMABinGOrnu6gTNUawrcQKNCAQ7QeTxORzle3+sDfjJpPCqhJh7GixZq4rHcc9l5A9qZ+WeBhgEuAAAAAElFTkSuQmCC);
      background-repeat: no-repeat;
      background-size: 14px;
      cursor: pointer;
    }
    ::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }
`
