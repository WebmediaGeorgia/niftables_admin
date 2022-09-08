import React from 'react'
import styled from 'styled-components'

import CommonBadge from '@commonV2/badges/CommonBadge'

export default function Badges ({ generative, status }) {
  return (
    <StyledWrapper className='g-mt-10'>
      {generative && (
        <CommonBadge label='Generative' />
      )}
      {status && (
        <CommonBadge label={status} />
      )}
      {status === 'available' && (
        <CommonBadge label='Available' />
      )}
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`
