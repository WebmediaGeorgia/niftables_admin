// @ts-nocheck
import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'

import PackTitle from '../common/packs/PackTitle'
import PackCollection from '../common/packs/PackCollection'
import PackPrice from '../common/packs/PackPrice'
import MediaWrapper from './media-wrapper'

export default function PackCard ({ className = '', pack, clickHandler }) {
  const name = get(pack, 'name')
  const collection = get(pack, 'collection')
  const availableSupply = get(pack, 'availableSupply')
  const price = get(pack, 'price')
  return (
    <StyledWrapper
      className={className}
      onClick={clickHandler}
    >
      <MediaWrapper
        className='media'
        pack={pack}
        availableSupply={availableSupply}
        clickHandler={clickHandler}
      />
      <div className='details-wrapper'>
        <PackTitle name={name} />
        <PackCollection collection={collection} />
        <PackPrice
          availableSupply={availableSupply}
          price={price}
        />
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
  :hover {
    .action-button {
      opacity: 1;
    }
  }
  .details-wrapper {
    padding: 10px 15px 25px;
  }
  .action-button {
    opacity: 0;
    transition: opacity 0.4s;
  }

  .media {
    & .image {
      transition: transform 0.25s ease-out;
    }
  }

  &:hover {
    .media {
      & .image {
        transform: scale(1.1);
      }
    }
  }
`
