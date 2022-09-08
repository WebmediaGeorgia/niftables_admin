// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import { resetModal } from '@entities/modal/actions'

import Modal from '@commonV2/Modal'
import HeadIcon from '../../common/HeadIcon'

export default function RedeemSuccess () {
  const dispatch = useDispatch()
  const router = useRouter()

  const closeHandler = React.useCallback(() => {
		router.push(router.asPath, undefined, { scroll: false })
		dispatch(resetModal())
	}, [router, dispatch])

  return (
    <Modal
			closeHandler={closeHandler}
			size='l'
		>
			<StyledWrapper >
				<HeadIcon type='letter' />
				<div className='title g-mt-30'>
          Check your mail
				</div>
				<div className='description g-mt-15'>
          We have sent a confirmation email to
				</div>
        <div className='email'>
          Jon_smith123@gmail.com
        </div>
			</StyledWrapper>
		</Modal>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0;
  .title {
    font-size: 20px;
    font-weight: 500;
    line-height: 23px;
    color: ${({ theme }) => theme.text.white}
  }
  .description {
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    color: ${({ theme }) => theme.text.white}
  }
  .email {
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    color: ${({ theme }) => theme.text.white}
  }
`
