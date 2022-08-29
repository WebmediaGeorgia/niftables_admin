import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import get from 'lodash/get'

import BlockchainNetwork from '@commonV2/BlockchainNetwork'

export default function Collection ({ className = '', pack }) {
  const collection = get(pack, 'collection')
  const name = get(pack, 'collection.name', '')
  const network = get(pack, 'collection.network', '')

  if (!collection) return null

  return (
    <StyledWrapper className={className}>
      <div className='collection'>
        NFT from:&nbsp;
        <Link href={`/collections/${pack.collection.id}`}>
          <a className='link'>
            {name}
          </a>
        </Link>
      </div>
      <BlockchainNetwork network={network} />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  & .collection {
    display: flex;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    .link {
      font-weight: 600;
      color: ${({ theme }) => theme.text.primary};
      text-decoration: none;
      :hover {
        text-decoration: underline;
      }
    }
  }
`
