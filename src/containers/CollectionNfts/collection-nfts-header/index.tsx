// @ts-nocheck
import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'

import { useTypedSelector } from '@hooks/useNewTypedSelector'

import RevealedIn from '@commonV2/RevealedIn'
import BackToCollections from './BackToCollections'
import PageHeader from './PageHeader'
import Description from './Description'

export default function CollectionNftsHeader() {
  const revealed = useTypedSelector((state) => get(state, 'collection.collection.revealed'))
  const revealDate = useTypedSelector((state) => get(state, 'collection.collection.delayedReveal.revealDate'))
  return (
    <StyledWrapper>
      <div className='wrapper g-container'>
        <BackToCollections />
        <PageHeader />
        <Description />
        {!revealed && (
          <div className='reveal-wrapper g-mt-20'>
            <RevealedIn
              label='NFTs will reveal in'
              revealedText='NFTs are revealed! Please reload the page'
              endDate={revealDate}
            />
          </div>
        )}
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  padding-bottom: 100px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  .wrapper {
    position: relative;
    width: 100%;
    z-index: 1;
    .reveal-wrapper {
      display: flex;
      justify-content: center;
    }
  }
`
