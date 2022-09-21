import React from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'
import get from 'lodash/get'

import { PACKS } from '@constants/payments'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { resetModal } from '@entities/modal/actions'

export default function LinkToCollection () {
  const dispatch = useDispatch()
  const router = useRouter()
  const type = useTypedSelector(state => get(state, 'modal.options.type'))
	const item = useTypedSelector(state => get(state, 'modal.data', {}))

  const navigateToCollection = React.useCallback((e) => {
    e.preventDefault()
    router.push(`/collections/${item.collection.id}`)
    dispatch(resetModal())
  }, [router, dispatch])

  if (type !== PACKS) return null

  return (
    <StyledWrapper>
      NFT from
      &nbsp;
      <Link href={`/collections/${item.collection.id}`}>
        <a
          className='link'
          onClick={navigateToCollection}
        >
          {item.collection.name}
        </a>
      </Link>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  margin-top: 10px;
  font-weight: 300;
  font-size: 15px;
  line-height: 22px;

  .link {
    color: ${({ theme }) => theme.text.secondary};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`
