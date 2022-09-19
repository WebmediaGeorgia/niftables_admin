// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import Image from 'next/image'
import cn from 'classnames'

import Close from 'public/field-icons/icon-clear.svg'
import ImagePlaceholder from '/public/icon-options/option_a.svg'

import styles from './SelectedCollectionOption.module.scss'

import {filtersReset, filtersUpdate} from '@entities/filters/actions'

export default function SelectedCollectionOption ({ collection }) {
	const { id, imageUrl, name } = collection
	const dispatch = useDispatch()

	const handleUnselect = React.useCallback(() => {
		dispatch(filtersReset())
	}, [dispatch])

	const image = React.useMemo(() => {
		if (!imageUrl) return <ImagePlaceholder className={styles['icon-option']} />
		return (
			<div className={styles['image']}>
				<Image
					src={imageUrl}
					alt={name}
					layout='fill'
				/>
			</div>
		)
	}, [imageUrl, name])

	return (
		<div
			className={styles['wrapper']}
			onClick={handleUnselect}
		>
			{image}
			<div className={styles.text}>
				{name}
			</div>
			<Close className={styles['icon-close']} />
		</div>
	)
}
