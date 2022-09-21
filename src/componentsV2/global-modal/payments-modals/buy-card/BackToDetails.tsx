import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'

import ArrowLeft from 'public/field-icons/arrow-right.svg'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import useMoveToInitialView from '@hooks/modal/useMoveToInitialView'

import Button from '@commonV2/Button'

import getEntityLabel from '@utils/entities/getEntityLabel'

export default function BackToDetails () {
	const type = useTypedSelector((state) => get(state, 'modal.options.type'))
	const moveToInitialView = useMoveToInitialView()
	const label = getEntityLabel(type)
	return (
    <StyledButton
      colorScheme='transparent'
      clickHandler={moveToInitialView}
    >
      <div className='label'>
        <ArrowLeft className='icon' />
        Back to {label} details
      </div>
    </StyledButton>
	)
}

const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 15px;
  font-size: 16px;
  font-weight: 400;
  height: 48px;

  .icon {
    margin-right: 10px;
    path {
      transition: fill 0.2s ease-out;
      fill: ${({ theme }) => theme.text.white};
    }
  }
`
