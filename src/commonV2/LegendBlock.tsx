import React from 'react';
import styled from 'styled-components'

export default function LegendBlock ({ className = '', label, children }) {
  return (
    <StyledWrapper className={className}>
      <legend className='title'>
        {label}
      </legend>
      <div className='description'>
        {children}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.fieldset`
  position: relative;
  margin-block: 12px 15px;
  margin-inline: 0;
  padding-block: 0 12px;
  padding-inline: 10px;
  min-inline-size: min-content;
  color: ${({ theme }) => theme.text.primary};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.text.primary};
  border-radius: 25px;
  text-align: center;
  .title {
    inset: 12px 0 auto;
    text-align: center;
    display: block;
    padding-inline-start: 8px;
    padding-inline-end: 8px;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    color: ${({ theme }) => theme.text.primary};
    font-size: 14px;
    font-weight: 500;
    line-height: 25px;
    text-align: center;
    text-transform: uppercase;
  }
  .description {
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
  }
`
