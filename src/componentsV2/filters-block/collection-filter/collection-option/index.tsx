// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import Image from 'next/image'

import ImagePlaceholder from '/public/icon-options/option_a.svg'

import styles from './CollectionOption.module.scss'

import { filtersUpdate } from '@entities/filters/actions'

export default function CollectionOption ({ collection }) {
	const { id, imageUrl, name } = collection
	const dispatch = useDispatch()

	const handleSelect = React.useCallback(() => {
		dispatch(filtersUpdate({ collectionId: id, page: 1 }))
	}, [dispatch, id])

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
			onClick={handleSelect}
		>
			{image}
			<div className={styles.text}>
				{name}
			</div>
		</div>
	)
}
