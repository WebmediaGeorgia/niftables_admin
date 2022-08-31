// @ts-nocheck
import React from 'react'
import cn from 'classnames'

import ArrowLeft from 'public/field-icons/arrow-right.svg'

import styles from '../../common/UtilityModal.module.scss'
import btnStyles from '@components/shared/Button/Button.module.scss'

import useMoveToBuyOptions from '@hooks/modal/useMoveToBuyOptions'

import Button from '@commonV2/Button'
import styled from "styled-components";

export default function AnotherPaymentMethod () {
	const moveToBuyOptions = useMoveToBuyOptions()
	return (
		<StyledButton
      colorScheme='transparent'
			className={cn(
				btnStyles['btn-back'],
				styles['btn-go-profile'],
				'g-mt-20'
			)}
			clickHandler={moveToBuyOptions}
		>
			<span>
				<ArrowLeft />
			</span>
			Choose another payment method
		</StyledButton>
	)
}

const StyledButton = styled(Button)`
  width: 100%;
  font-size: 16px;
  font-weight: 400;
`
