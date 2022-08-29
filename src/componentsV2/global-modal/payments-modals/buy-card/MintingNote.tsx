import React from 'react'
import styled from 'styled-components'

import { useTypedSelector } from '@hooks/useNewTypedSelector'

import CommonBadge from '@commonV2/badges/CommonBadge'

import formatAddress from '@utils/metamask/formatAddress'

export default function MintingNote () {
  const metamaskAddress = useTypedSelector((state) => state.user.metamaskAddress)

	if (!metamaskAddress) return null

  return (
    <StyledWrapper>
      <div className='title'>
        Important:
      </div>
      <div className='description'>
        The purchased nft will be minted to your saved metamask wallet
      </div>
      <CommonBadge
        className='badge g-mt-10'
        label={formatAddress(metamaskAddress)}
      />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  padding-left: 20px;
  border-left: solid 2px ${({ theme }) => theme.text.primary};
  .title {
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
  }
  .description {
    margin-top: 10px;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
  }
  .badge {
    display: inline-block;
  }
`
