// @ts-nocheck
import React from 'react'
import styled from 'styled-components'

import generateUniqueId from '@utils/generateUniqueId'

export default function Checkbox ({
	className = '', checked, changeHandler, label, disabled
}) {
	const uniqueId = generateUniqueId('checkbox')
	return (
		<StyledWrapper className={className}>
			<input
				id={uniqueId}
        className='input'
				type='checkbox'
				checked={checked}
				onChange={changeHandler}
				disabled={disabled}
			/>
			<label
				htmlFor={uniqueId}
				className='label'
			>
				{label}
			</label>
		</StyledWrapper>
	)
}

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  .input {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    margin: 0;
    background: transparent;
    border: 1px solid #4F83C9;
    border-radius: 4px;
    appearance: none;
    cursor: pointer;
    &:before {
      content: '';
      width: 14px;
      height: 14px;
      margin-bottom: 1px;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 12 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M4 7.80007L1.2 5.00006L0.266663 5.9334L4 9.66673L12 1.66673L11.0667 0.733398L4 7.80007Z' fill='%23FF66C4'/%3e%3c/svg%3e");
    }
    &:checked {
      border: 1px solid #FF66C4;
      &::before {
        transform: scale(1);
      }
    }
  }
  .label {
    margin-left: 10px;
    font-size: 16px;
    font-weight: 400;
    line-height: 18px;
  }
`
