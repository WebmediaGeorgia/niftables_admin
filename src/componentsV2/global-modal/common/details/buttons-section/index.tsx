// @ts-nocheck
import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'

import BuyOrSignin from '@commonV2/BuyOrSignin'
import RevealedIn from '@commonV2/RevealedIn'
import ActionButton from './ActionButton'

export default function ButtonsSection ({ nft }) {
  return (
    <StyledWrapper>
      <BuyOrSignin className='button'>
        <ActionButton
          className='button'
          nft={nft}
        />
      </BuyOrSignin>
      {!get(nft, 'collection.revealed') && (
        <RevealedIn
          className='revealed-in'
          label='NFT will reveal in'
          endDate={get(nft, 'collection.delayedReveal.revealDate')}
        />
      )}
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 20px;
  margin-top: auto;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 20px;
  }
  .button {
    @media only screen and (max-width: 768px) {
      width: 100%;
    }
  }
  .revealed-in {
    @media only screen and (max-width: 768px) {
      width: 100%;
    }
  }
`
