import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'

import styles from './RedeemCard.module.scss'

export default function UtilityInformation ({ token }) {
  const utilityExperience = get(token, 'nft.utilityExperience', '')

  if (!utilityExperience) return null

  return (
    <StyledWrapper>
      <div className='title'>
        Utility information
      </div>
      <div className='description'>
        {utilityExperience}
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  color: #4f83c9;
  .title {
    margin: 10px 0;
    font-size: 16px;
    font-weight: 700;
    line-height: 18px;
  }
  .description {
    font-size: 12px;
    font-weight: 400;
    line-height: 24px;
    word-break: break-word;
  }
`
