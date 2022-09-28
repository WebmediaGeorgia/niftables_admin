// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import { resetModal } from '@entities/modal/actions'

import Modal from '@commonV2/Modal'
import HeadIcon from '../../common/HeadIcon'
import {useTypedSelector} from "@hooks/useNewTypedSelector";

export default function RedeemSuccess () {
  const { user } = useTypedSelector((state) => state.user);
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
          {user.email}
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
    font-weight: 700;
    font-size: 26px;
    line-height: 36px;
    color: ${({ theme }) => theme.text.white}
  }
  .description {
    font-weight: 300;
    font-size: 20px;
    line-height: 30px;
    color: ${({ theme }) => theme.text.white}
  }
  .email {
    font-size: 20px;
    line-height: 30px;
    font-weight: 700;
    color: ${({ theme }) => theme.text.white}
  }
`
