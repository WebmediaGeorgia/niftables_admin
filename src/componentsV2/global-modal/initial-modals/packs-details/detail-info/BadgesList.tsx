// @ts-nocheck
import React from 'react'
import get from 'lodash/get'
import styled from 'styled-components'

import CommonBadge from '@commonV2/badges/CommonBadge'

export default function BadgesList ({ className = '', pack }) {
  const contentRule = get(pack, 'contentRule', {})
  return (
    <StyledWrapper className={className}>
      <div className='description'>
        In this pack chances to get NFT of rarities:
      </div>
      <div className='badgs-wrapper'>
        {Object.keys(contentRule)
          .filter((rule) => contentRule[rule] !== 0)
          .map((rule, index) => (
            <CommonBadge
              key={index}
              label={rule}
            />
          ))}
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  margin-top: 30px;
  .description {
    font-weight: 300;
    font-size: 15px;
    line-height: 22px;
    color: ${({ theme }) => theme.text.white};
  }
  .badgs-wrapper {
    display: flex;
    gap: 10px;
    margin-top: 10px;
  }
`
