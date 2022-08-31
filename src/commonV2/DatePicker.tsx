// @ts-nocheck
import React from 'react'
import ReactDatePicker from 'react-datepicker'
import cn from 'classnames'
import styled from 'styled-components'
import format from 'date-fns/format'

import 'react-datepicker/dist/react-datepicker.css'

export default function DatePicker ({
	className,
  disabled,
  placeholder,
  startDate,
  endDate,
  changeHandler
}) {
  const handleChange = React.useCallback(([from, to]) => {
		const parsedFrom = from ? format(from, 'yyyy-MM-dd') : null
		const parsedTo = to ? format(to, 'yyyy-MM-dd') : null
    changeHandler([parsedFrom, parsedTo])
  }, [changeHandler])

	const parsedStartDate = React.useMemo(() => startDate ? new Date(startDate) : null, [startDate])
	const parsedEndDate = React.useMemo(() => endDate ? new Date(endDate) : null, [endDate])

  return (
    <StyledWrapper className={className}>
      <ReactDatePicker
        className='data-picker'
        placeholderText={placeholder}
				selected={parsedStartDate}
        startDate={parsedStartDate}
        endDate={parsedEndDate}
        onChange={handleChange}
				disabled={disabled}
        selectsRange
				isClearable
      />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  .data-picker {
    width: 100%;
    padding: 11px 30px 10px 13px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: ${({ theme }) => theme.text.white};
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid #4F83C9;
    border-radius: 6px;
    &::placeholder {
      color: #4F83C9;
    }
  }
`
