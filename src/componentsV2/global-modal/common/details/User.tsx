import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'

import IconPerson from 'public/field-icons/person-small.svg'
import IconValidUser from 'public/field-icons/valid-user.svg'

export default function User ({ className = '', label, item }) {
  const name = get(item, 'collection.whitelabel.name', '')
  return (
    <StyledWrapper className={className}>
      <div className='text'>
        {label}:
      </div>
      <IconPerson className='icon-person' />
      <div className='text'>
        <b>{name}</b>
      </div>
      <IconValidUser className='validated' />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  & .text {
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
  }
  & .icon-person {
    margin-left: 10px;
    margin-right: 5px;
    g {
      circle:first-child {
        fill: ${({ theme }) => theme.user.fill};
      }
      circle:last-child {
        stroke: ${({ theme }) => theme.user.stroke};
      }
    }
  }
  & .validated {
    margin-left: 5px;
    fill: ${({ theme }) => theme.text.primary};
  }
`
