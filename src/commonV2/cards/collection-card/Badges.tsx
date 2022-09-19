import React from 'react'
import styled from 'styled-components'

import CommonBadge from '@commonV2/badges/CommonBadge'
import toLower from 'lodash/toLower';

export default function Badges ({ generative, status }) {
  return (
    <StyledWrapper className='g-mt-10'>
      {toLower(status) === 'sold' && (
        <CommonBadge className='sold-badge' label="Sold" />
      )}
      {toLower(status) === 'available' && (
        <CommonBadge className='available-badge' label='Available' />
      )}
      {generative && (
        <CommonBadge label='Generative' />
      )}
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  .sold-badge {
    background: #07031F;
    color: white;
  }

  .available-badge {
    background-color: #08A652;
    color: white;
  }
`
