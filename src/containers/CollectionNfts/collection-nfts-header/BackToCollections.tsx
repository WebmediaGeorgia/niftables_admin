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
        Back to All Collections
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #FFFFFF;
  opacity: 0.5;
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
