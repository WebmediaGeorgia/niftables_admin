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
import WarningHint from "@commonV2/WarningHint";
import {useTypedSelector} from "@hooks/useNewTypedSelector";
import get from "lodash/get";

export default function PacksDetails () {
  const pack = useTypedSelector(state => get(state, 'modal.data', {}))
  const dispatch = useDispatch()
  const collectionId= pack?.collection?.id

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
          <WarningHint className='hint' collectionId={collectionId} />
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
    display: grid;
    grid-template-areas:
        "image description"
        ". hint";
    grid-template-columns: min-content 1fr;
    column-gap: 30px;

    @media only screen and (max-width: 768px) {
      grid-template-areas:
        "image image"
        "description description"
        "hint hint";

      max-width: 475px;
      margin: 0 auto;
    }
  }
  .hint {
    grid-area: hint;
  }
  .description-block {
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    border: 1px solid #dadada;
    margin-top: 30px;
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
