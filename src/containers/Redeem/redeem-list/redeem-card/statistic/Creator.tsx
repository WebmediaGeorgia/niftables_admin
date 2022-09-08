import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'

import ValidUser from 'public/field-icons/valid-user.svg'
import PersonSmall from '/public/field-icons/person-small.svg'

export default function Creator ({ token }) {
  const creatorName = get(token, 'nft.collection.whitelabel.name', '')
  return (
    <StyledWrapper className='g-d-flex g-mr-5'>
      <div className='g-mr-5'>
        Creator:
      </div>
      <div className='img'>
        <PersonSmall
          className='icon-person'
          width='18px'
          height='18px'
        />
      </div>
      <b className='g-t-capitalize'>{creatorName}</b>
      <ValidUser className='icon-user' />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  .img {
    width: 18px;
    height: 18px;
    margin: 0 6px;
    .icon-person {
      g {
        circle:first-child {
          fill: #ff66c4;
        }
        circle:last-child {
          stroke: #ff66c4;
        }
      }
    }
  }
  .icon-user {
    margin-left: 5px;
    fill: ${({ theme }) => theme.text.primary};
  }
`
