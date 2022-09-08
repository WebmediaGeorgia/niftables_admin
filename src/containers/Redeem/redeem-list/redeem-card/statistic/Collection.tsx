import React from 'react'
import get from 'lodash/get'

export default function Collection ({ token }) {
  const collectionName = get(token, 'nft.collection.name', '')

  if (!collectionName) return null

  return (
    <div className='g-d-flex g-mr-5'>
      <div className='g-mr-5'>Collection: </div>
      <b className='g-t-capitalize'>{collectionName}</b>
    </div>
  )
}
