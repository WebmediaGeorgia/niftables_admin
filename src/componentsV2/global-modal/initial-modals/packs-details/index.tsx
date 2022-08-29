// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { resetModal } from '@entities/modal/actions'

import Modal from '@commonV2/Modal'
import Preview from './Preview'
import DetailInfo from './detail-info'
import Description from './Description'
import PackContains from './PackContains'

export default function PacksDetails () {
	const dispatch = useDispatch()

	const closeHandler = React.useCallback(() => {
		dispatch(resetModal())
	}, [dispatch])

	return (
		<Modal
			closeHandler={closeHandler}
			size='l'
		>
			<StyledWrapper>
				<div className='main-container'>
          <Preview />
					<DetailInfo />
				</div>

				<div className='description-block'>
          <Description />
					<PackContains />
				</div>
			</StyledWrapper>
		</Modal>
	)
}

const StyledWrapper = styled.div`
  .main-container {
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      max-width: 475px;
      margin: 0 auto;
    }
  }
  .description-block {
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    border: 1px solid #dadada;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.075) 0%,
      rgba(255, 255, 255, 0.075) 100%
    );
    &-header {
      font-size: 16px;
      line-height: 24px;
      font-weight: bold;
      padding: 20px 30px 10px 30px;
    }
    &-body {
      font-size: 12px;
      line-height: 18px;
      padding: 10px;
      padding: 10px 30px 20px 30px;
    }
  }
`
