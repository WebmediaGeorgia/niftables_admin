// @ts-nocheck
import React from 'react'
import styled from 'styled-components'

import RarityRank from '@commonV2/RarityRank'
import RarityScore from '@commonV2/RarityScore'

export default React.memo(function NftHeader ({ rarityRank, rarityScore }) {
  return (
    <StyledWrapper>
      <RarityRank rarityRank={rarityRank} />
      <RarityScore rarityScore={rarityScore} />
    </StyledWrapper>
  )
})

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 18px;
  margin-top: 16px;
`
