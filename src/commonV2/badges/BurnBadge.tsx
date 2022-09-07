import React from 'react';
import styled from 'styled-components'

import Warn from 'public/other/warn.svg';

export default function BurnBadge ({ className, label }) {
  return (
    <StyledWrapper className={className}>
      <Warn className='icon g-mr-20' />
      {label}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  text-align: left;
  border-radius: 30px;
  background: rgba(7, 3, 31, 0.3);
  color: ${({ theme }) => theme.text.white};
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  .icon {
    fill: ${({ theme }) => theme.text.white};
    border-radius: 50%;
  }
`
