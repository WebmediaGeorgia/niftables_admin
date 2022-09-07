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
  color: ${({ theme }) => theme.text.white};
  border-radius: 25px;
  text-align: center;

  background: rgba(7, 3, 31, 0.3);
  border: none;

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
    text-transform: uppercase;
    color: #FF66C4;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    border: none;
  }
  .description {
    font-weight: 300;
    font-size: 15px;
    line-height: 22px;
  }
`
