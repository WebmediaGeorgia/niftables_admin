// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import { resetModal } from '@entities/modal/actions'

import Modal from '@commonV2/Modal'
import Button from '@commonV2/Button'
import HeadIcon from '../../common/HeadIcon'

export default function WithdrawSuccess () {
  const dispatch = useDispatch()
  const router = useRouter()

  const closeHandler = React.useCallback(() => {
		router.push(router.asPath, undefined, { scroll: false })
		dispatch(resetModal())
	}, [router, dispatch])

  const moveToProfile = React.useCallback(() => {
    router.push('/my-profile/my-nfts')
    dispatch(resetModal())
  }, [router, dispatch])

  return (
    <Modal
			closeHandler={closeHandler}
			size='l'
		>
			<StyledWrapper >
				<HeadIcon type='success' />
				<div className='title g-mt-30'>
          Success
				</div>
				<div className='description g-mt-15'>
          NFT transfer is completed!
				</div>
        <Button
          className='button g-mt-20'
          clickHandler={moveToProfile}
        >
          Go to Profile
        </Button>
			</StyledWrapper>
		</Modal>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;
  .title {
    font-size: 20px;
    font-weight: 500;
    line-height: 23px;
    color: ${({ theme }) => theme.text.primary}
  }
  .description {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    color: ${({ theme }) => theme.text.primary}
  }
  .button {
    min-width: 200px;
    @media only screen and (max-width: 480px) {
      width: 100%;
    }
  }
`
