// @ts-nocheck
import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'

import { NFT } from '@constants/payments'

import MediaPreview from '@commonV2/media-preview'
import LikeHandler from './LikeHandler'

export default React.memo(function MediaWrapper ({ className, nft }) {
  const id = get(nft, 'id')
  const liked = get(nft, 'liked')
  return (
    <StyledWrapper className={className}>
      <MediaPreview
        data={nft}
        type={NFT}
        withoutFullView
      />
      <LikeHandler
        id={id}
        liked={liked}
      />
    </StyledWrapper>
  )
})

const StyledWrapper = styled.div`
  position: relative;
  height: 0;
  margin-top: 4px;
  padding-bottom: 100%;
`
