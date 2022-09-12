// @ts-nocheck
import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'

import MediaWrapper from './MediaWrapper'
import Title from './Title'
import DistributionType from './DistributionType'
import Badges from './Badges'

export default function CollectionCard ({ className = '', collection, clickHandler }) {
  const name = get(collection, 'name')
  const distribution = get(collection, 'distribution')
  const generative = get(collection, 'generative')
  const status = get(collection, 'status')
  return (
    <StyledWrapper
      className={className}
      onClick={clickHandler}
    >
      <MediaWrapper className='media' collection={collection} />
      <div className='details-wrapper'>
        <Title name={name} />
        <DistributionType distribution={distribution} />
        <Badges
          generative={generative}
          status={status}
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
  .details-wrapper {
    padding: 10px 15px 25px;
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
