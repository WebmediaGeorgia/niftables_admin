// @ts-nocheck
import React from 'react'
import cn from 'classnames'

import ArrowLeft from 'public/field-icons/arrow-right.svg'

import styles from '../../common/UtilityModal.module.scss'
import btnStyles from '@components/shared/Button/Button.module.scss'

import useMoveToBuyOptions from '@hooks/modal/useMoveToBuyOptions'

import Button from '@commonV2/Button'

export default function AnotherPaymentMethod () {
	const moveToBuyOptions = useMoveToBuyOptions()
	return (
		<Button
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
		</Button>
	)
}
