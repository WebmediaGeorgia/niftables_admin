// @ts-nocheck
import React from 'react'
import styled from 'styled-components'

import { NFT } from '@constants/payments'

import MediaPreview from '@commonV2/media-preview'

export default function Preview ({ nft }) {
	return (
		<StyledWrapper>
      <MediaPreview
        data={nft}
        type={NFT}
        withoutFullView
      />
		</StyledWrapper>
	)
}

const StyledWrapper = styled.div`
  position: relative;
  width: 294px;
  height: 294px;
  flex-shrink: 0;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
  }
`
