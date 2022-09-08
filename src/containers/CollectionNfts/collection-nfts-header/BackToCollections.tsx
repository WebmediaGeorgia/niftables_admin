import React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import ArrowRight from '/public/field-icons/arrow-right.svg'

export default function BackToCollections () {
  const router = useRouter()
  return (
    <StyledWrapper onClick={() => router.push('/collections')}>
      <ArrowRight className='icon' />
      <div>
        Back to collections
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  color: #fff;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
  :hover {
    opacity: 0.8;
  }
  .icon {
    margin-right: 10px;
    fill: #fff;
  }
`
