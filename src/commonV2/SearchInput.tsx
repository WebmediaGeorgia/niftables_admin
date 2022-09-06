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
    left: ${({ toggleInput }) => toggleInput ? '2px' : '4px'};
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
      fill: ${({ theme }) => theme.text.white};
    }
  }
  .input {
    width: 100%;
    height: 36px;
    padding: 7px 16px 7px 40px;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    color: ${({ theme }) => theme.text.white};
    border: transparent;
    border-radius: 6px;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.075) 0%,
      rgba(255, 255, 255, 0.075) 100%
    );
    transition: width 0.2s, border-radius 0.2s, padding 0.2s;
    outline-color: ${({ theme }) => theme.text.secondaryBlue};
    @media only screen and (max-width: 1024px) {
      height: 36px;
    }
    ::-webkit-search-cancel-button {
      -webkit-appearance: none;
      height: 20px;
      width: 20px;
      display: block;
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23777'><path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/></svg>");
      background-size: 20px;
      cursor: pointer;
    }
    ::placeholder {
      font-style: normal;
      font-weight: 300;
      font-size: 15px;
      line-height: 22px;
      color: #4F83C9;
    }
    &-medium {
      font-size: 14px;
      text-indent: 20px;
      line-height: 21px;
      padding: 11.5px 16px 11.5px 36px;
    }
  }
`
