// @ts-nocheck
import React from 'react'
import styled from 'styled-components'
import debounce from 'lodash/debounce'

import SearchInputIcon from 'public/field-icons/search.svg'

export default React.memo(function SearchInput ({
  className = '', toggleInput, onToggleInput, placeholder = '',
  value = '', searchHandler
}) {
  const isMounted = React.useRef(false)
  const [localValue, setLocalValue] = React.useState(value)

  const debounced = React.useRef(
    debounce((searchText) => {
      searchHandler(searchText)
    }, 500)
  )

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
      toggleInput={toggleInput}
    >
      <div
        className='search-icon'
        onClick={onToggleInput}
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
})

const StyledWrapper = styled.div`
  position: relative;
  transition: width 0.2s, max-width 0.2s, background 0.2s;
  .search-icon {
    position: absolute;
    top: 50%;
    left: ${({ toggleInput }) => toggleInput ? '2px' : '12px'};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    transform: translateY(-50%);
    transition: left 0.2s;
    cursor: pointer;
    @media only screen and (max-width: 480px) {
      left: 2px;
    }
    .icon {
      width: 24px;
      height: 24px;
      fill: ${({ theme }) => theme.text.primary};
    }
  }
  .input {
    width: 100%;
    height: 50px;
    padding: 7px 16px 7px 50px;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    color: ${({ theme }) => theme.text.primary};
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 35px;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.075) 0%,
      rgba(255, 255, 255, 0.075) 100%
    );
    transition: width 0.2s, border-radius 0.2s, padding 0.2s;
    outline-color: ${({ theme }) => theme.text.secondary};
    @media only screen and (max-width: 1024px) {
      height: 36px;
    }
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
    &-medium {
      font-size: 14px;
      text-indent: 20px;
      line-height: 21px;
      padding: 11.5px 16px 11.5px 36px;
    }
  }
`
