// @ts-nocheck
import React from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { resetModal } from '@entities/modal/actions'

import Modal from '@commonV2/Modal'
import Preview from './Preview'
import DetailsInfo from './DetailInfo'
import AccordionDetails from './AccordionDetails'

export default function OpenedNftDetails () {
  const router = useRouter()
	const dispatch = useDispatch()

	const closeHandler = React.useCallback(() => {
		router.push(router.asPath, undefined, { scroll: false })
		dispatch(resetModal())
	}, [router, dispatch])

	return (
		<Modal
			closeHandler={closeHandler}
			size='l'
		>
			<StyledWrapper>
				<Preview />
        <div className='detail-wrapper'>
				  <DetailsInfo />
        </div>
			</StyledWrapper>
			<AccordionDetails />
		</Modal>
	)
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    max-width: 475px;
    margin: 0 auto;
  }
  .media-wrapper {
    position: relative;
    width: 294px;
    height: 294px;
    flex-shrink: 0;
    @media only screen and (max-width: 480px) {
      width: 100%;
      height: 100%;
    }
  }
  .detail-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    padding-left: 30px;
    @media only screen and (max-width: 768px) {
      width: 100%;
      padding: 0;
      margin-top: 10px;
    }
  }
`
