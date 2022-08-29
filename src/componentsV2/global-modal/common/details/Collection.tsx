import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'

import BlockchainNetwork from '@commonV2/BlockchainNetwork'

export default function Collection ({ className = '', nft }) {
  const collection = get(nft, 'collection')
  const name = get(nft, 'collection.name', '')
  const network = get(nft, 'collection.network', '')

  if (!collection) return null

  return (
    <StyledWrapper className={className}>
      <div className='collection'>
        Collection: <b>{name}</b>
      </div>
      <BlockchainNetwork network={network} />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & .collection {
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    color: ${({ theme }) => theme.text.primary};
  }
`
