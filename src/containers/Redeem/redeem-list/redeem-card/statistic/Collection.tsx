import React from 'react'
import get from 'lodash/get'
import styled from "styled-components";

export default function Collection ({ token }) {
  const collectionName = get(token, 'nft.collection.name', '')

  if (!collectionName) return null

  return (
    <StyledWrapper className='g-d-flex g-mr-5'>
      <div className='g-mr-5'>Collection: </div>
      <b className='g-t-capitalize collection'>{collectionName}</b>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  font-weight: 300;
  font-size: 15px;
  line-height: 22px;

  .collection {
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
  }
`
