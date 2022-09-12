// @ts-nocheck
import React from 'react'
import styled from 'styled-components'

import { PACKS } from '@constants/payments'

import MediaPreview from '@commonV2/media-preview'

export default React.memo(function MediaWrapper ({ className, collection }) {
  return (
    <StyledWrapper>
      <MediaPreview
        className={className}
        data={collection}
        type={PACKS}
        withoutFullView
      />
    </StyledWrapper>
  )
})

const StyledWrapper = styled.div`
  position: relative;
  height: 0;
  padding-bottom: 100%;
  .media {
    .image {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
`
