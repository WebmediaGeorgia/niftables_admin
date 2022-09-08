// @ts-nocheck
import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'

import { NFT } from '@constants/payments'

import MediaPreview from '@commonV2/media-preview'

export default React.memo(function MediaWrapper ({ nft }) {
  return (
    <StyledWrapper>
      <MediaPreview
        data={nft}
        type={NFT}
        withoutFullView
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
