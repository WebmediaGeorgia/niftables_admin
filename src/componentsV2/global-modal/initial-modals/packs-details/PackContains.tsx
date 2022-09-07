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
        className="open-collection-button"
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
  color: #0D4B9E;
  background: #E3ECF8;
  backdrop-filter: blur(4px);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  font-weight: 300;
  font-size: 15px;
  line-height: 22px;

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
  .open-collection-button {
    height: 37px;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
  }
  .preview-wrapper {
    display: flex;
    margin-right: auto;
    margin-left: 20px;
    align-items: center;

    .image {
      position: relative;
      width: 30px;
      height: 30px;
      margin-right: 6px;
      background: #0D4B9E;
      border-radius: 2px;
      .icon {
        width: 30px;
        height: 30px;
      }
    }
    .name {
      font-weight: 400;
      font-size: 15px;
      line-height: 22px;
    }
  }
`
