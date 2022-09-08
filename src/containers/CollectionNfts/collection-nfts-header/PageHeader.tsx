// @ts-nocheck
import React from 'react'
import styled from 'styled-components'

import { PACKS } from '@constants/payments'

import { useTypedSelector } from '@hooks/useNewTypedSelector'

import MediaPreview from '@commonV2/media-preview'

export default function PageHeader () {
  const collection = useTypedSelector((state) => state.collection.collection)
  return (
    <StyledWrapper>
      <div className='media-wrapper'>
        <MediaPreview
          className='media'
          data={collection}
          type={PACKS}
        />
      </div>
      <h1 className='title'>
        {collection?.name}
      </h1>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
  .media-wrapper {
    position: relative;
    width: 42px;
    height: 42px;
    .media {
      border-radius: 0;
      .image {
        border-radius: 0;
      }
    }
  }
  .title {
    margin: 0;
    font-size: 38px;
    font-weight: 700;
    line-height: 42px;
    @media only screen and (max-width: 480px) {
      text-align: center;
    }
  }
`
