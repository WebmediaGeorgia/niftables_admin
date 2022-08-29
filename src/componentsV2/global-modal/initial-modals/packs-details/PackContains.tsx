// @ts-nocheck
import React from 'react'
import NextImage from 'next/image'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import get from 'lodash/get'

import OptionDefault from '/public/icon-options/option_a.svg'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { resetModal } from '@entities/modal/actions'

import Button from '@commonV2/Button'

export default function PackContains () {
  const router = useRouter()
	const dispatch = useDispatch()
	const { id, name, imageUrl } = useTypedSelector(state => get(state, 'modal.data.collection', {}))
	const type = useTypedSelector(state => get(state, 'modal.options.type'))

	const navigateToCollection = React.useCallback(() => {
    router.push(`/collections/${id}`)
		dispatch(resetModal())
	}, [router, id, dispatch])

  return (
    <StyledWrapper>
      <div className='label'>
        This pack contains NFT from:
      </div>

      <div className='preview-wrapper'>
        {!imageUrl ? (
          <div className='image'>
            <NextImage
              src={imageUrl}
              layout='fill'
            />
          </div>
        ) : (
          <div className='image'>
            <OptionDefault className='icon' />
          </div>
        )}
        <div className='name'>
          <b>{name}</b>
        </div>
      </div>

      <Button
        clickHandler={navigateToCollection}
      >
        Open Collection
      </Button>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0;
  width: 100%;
  height: 70px;
  padding: 0 30px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.075) 0%,
    rgba(255, 255, 255, 0.075) 100%
  );
  backdrop-filter: blur(4px);
  border-radius: 8px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    height: auto;
    padding: 20px 30px;
  }
  .label {
    font-size: 12px;
    line-height: 18px;
  }
  .preview-wrapper {
    display: flex;
    .image {
      position: relative;
      width: 20px;
      height: 20px;
      margin-right: 12px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 2px;
      .icon {
        width: 20px;
        height: 20px;
      }
    }
    .name {
      font-size: 12px;
      line-height: 18px;
    }
  }
`
