import React from 'react'
import styled from 'styled-components'

import CheckActivated from 'public/other/check_activated.svg'
import InfoIcon from 'public/other/info-icon.svg'

import { ACTIVATED } from '@constants/tokens'

export default function ActivatedBadge ({ className = '', utilityStatus }) {
  if (utilityStatus !== ACTIVATED) return null
  return (
    <StyledWrapper className={className}>
      <InfoIcon className='g-mr-5' />
      Activated
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  font-size: 14px;
  font-weight: 500;
  line-height: 28px;
  white-space: nowrap;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.badge.activatedBg};
  color: #0EB971;
  svg {
    fill: #0EB971;
    path {
      fill: #0EB971;
    }
  }
`
