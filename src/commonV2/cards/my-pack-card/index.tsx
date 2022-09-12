// @ts-nocheck
import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'

import PackTitle from '../common/packs/PackTitle'
import PackCollection from '../common/packs/PackCollection'
import MediaWrapper from './MediaWrapper'
import OpenButton from './OpenButton'
import HoverableActionButton, {BuyNowWrapper} from "@commonV2/cards/common/nfts/HoverableActionButton";

export default function MyPackCard ({ className = '', token, clickHandler }) {
  const name = get(token, 'pack.name')
  const collection = get(token, 'pack.collection')
  return (
    <StyledWrapper
      className={className}
      onClick={clickHandler}
    >
      <MediaWrapper
        className="media"
        pack={token.pack}
      />
      <div className='details-wrapper'>
        <PackTitle name={name} />
        <PackCollection collection={collection} />
        <HoverableActionButton className='open-button-wrapper'>
          <OpenButton />
        </HoverableActionButton>
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

  }

  .media {
    & .image {
      transition: transform 0.25s ease-out;
    }
  }

  .open-button-wrapper {
    margin-left: initial;
    width: 100%;
    height: 40px;
  }

  &:hover {
    .media {
      & .image {
        transform: scale(1.1);
      }
    }

    ${BuyNowWrapper} {
      background-position: right bottom;

      div, span {
        color: white;
      }
    }
  }
`
