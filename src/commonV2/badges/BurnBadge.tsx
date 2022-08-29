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
  padding: 14px 16px;
  line-height: 22px;
  text-align: left;
  border-radius: 30px;
  background: linear-gradient(
    270deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.15) 100%
  );
  color: ${({ theme }) => theme.text.primary};
  font-size: 12px;
  font-weight: 600;
  line-height: 22px;
  .icon {
    fill: ${({ theme }) => theme.text.primary};
    border-radius: 50%;
  }
`
