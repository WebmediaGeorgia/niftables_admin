import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

export default function PackCollection ({ collection }) {
  if (!collection) return null
  const { id, name } = collection
  return (
    <StyledWrapper className='g-mt-5'>
      <div className='label'>
        NFT from
      </div>
      <Link href={`/collections/${id}`}>
        <a
          className='link'
          title={name}
          onClick={e => e.stopPropagation()}
        >
          {name}
        </a>
      </Link>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  font-size: 12px;
  font-weight: 400;
  .label {
    color: #000;
    white-space: nowrap;
  }
  .link {
    color: #4f83c9;
    text-decoration: none;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    :hover {
      text-decoration: underline;
    }
  }
`
