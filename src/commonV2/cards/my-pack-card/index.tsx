// @ts-nocheck
import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'

import PackTitle from '../common/packs/PackTitle'
import PackCollection from '../common/packs/PackCollection'
import MediaWrapper from './MediaWrapper'
import OpenButton from './OpenButton'

export default function MyPackCard ({ className = '', token, clickHandler }) {
  const name = get(token, 'pack.name')
  const collection = get(token, 'pack.collection')
  return (
    <StyledWrapper
      className={className}
      onClick={clickHandler}
    >
      <MediaWrapper
        pack={token.pack}
      />
      <div className='details-wrapper'>
        <PackTitle name={name} />
        <PackCollection collection={collection} />
        <OpenButton />
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  position: relative;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  .details-wrapper {
    padding: 10px 15px 25px;
  }
`
