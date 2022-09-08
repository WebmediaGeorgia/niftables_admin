import React from 'react'
import styled from 'styled-components'

import BlockchainNetwork from '@commonV2/BlockchainNetwork'
import Creator from './Creator'
import Collection from './Collection'

export default function Statistic ({ token }) {
  return (
    <StyledWrapper>
      <Creator token={token} />
      <div className='owner'>
        <Collection token={token} />
        <BlockchainNetwork network={token.nft.collection?.network} />
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text.primary};
  @media only screen and (max-width: 480px) {
    margin-top: 20px;
  }
  && .owner {
    margin: 6px 0 0;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    align-items: center;
    svg {
      path {
        fill: #000;
      }
    }
    .label {
      color: #000;
    }
  }
`
