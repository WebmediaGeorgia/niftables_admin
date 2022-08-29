// @ts-nocheck
import React from 'react'
import styled from 'styled-components'

import CommonBadge from '@commonV2/badges/CommonBadge'

export default React.memo(function NftBadges ({ rarity, utilityType }) {
  return (
    <StyledWrapper>
      {rarity && (
        <CommonBadge
          label={rarity}
        />
      )}
      {utilityType && (
        <CommonBadge
          label={utilityType}
        />
      )}
    </StyledWrapper>
  )
})

const StyledWrapper = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 8px;
`
