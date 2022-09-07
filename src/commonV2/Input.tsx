// @ts-nocheck
import React from 'react'
import styled from 'styled-components'

export default function Input ({
	className = '', type, placeholder, value, changeHandler, blurHandler, disabled
}) {
	return (
		<StyledWrapper className={className}>
			<input
				className='input'
				type={type}
				autoComplete='off'
				placeholder={placeholder}
        disabled={disabled}
				value={value}
				onChange={(e) => changeHandler(e.target.value)}
				onBlur={(e) => blurHandler(e.target.value)}
			/>
		</StyledWrapper>
	);
}

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  .input {
    height: 36px;
		font-size: 12px;
		line-height: 18px;
		font-weight: 400;
		padding: 7px 12px 7px 16px;
		color: ${({ theme }) => theme.text.primary};
		border: #dadada;
		background-color: transparent;
		background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.075) 0%,
      rgba(255, 255, 255, 0.075) 100%
    );
		border-radius: 35px;
		width: 100%;
		outline-color: rgba(255, 255, 255, 0.5);
		:-webkit-autofill {
			font-size: 18px;
			-webkit-box-shadow: 0 0 0px 1000px #375547 inset;
			-moz-box-shadow: 0 0 0 100px #375547 inset;
			box-shadow: 0 0 0 100px #375547 inset;
			-webkit-text-fill-color: ${({ theme }) => theme.text.primary} !important;
		}
		::placeholder {
      font-weight: 300;
      font-size: 15px;
      line-height: 22px;
			color: rgba(255, 255, 255, 0.5);
		}
    :disabled {
      opacity: 0.2;
      cursor: not-allowed;
    }
  }
`
