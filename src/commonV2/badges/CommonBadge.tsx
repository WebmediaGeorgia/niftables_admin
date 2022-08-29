import React from 'react'
import styled from 'styled-components'

export default function CommonBadge ({ className = '', label }) {
  return (
    <StyledWrapper className={className}>
      {label}
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  padding: 0 10px;
  background: ${({ theme }) => theme.badge.bg};
  font-size: 10px;
  line-height: 18px;
  color: ${({ theme }) => theme.badge.color};
  white-space: nowrap;
  letter-spacing: 0.5px;
  border-radius: 20px;
  text-transform: uppercase;
`
