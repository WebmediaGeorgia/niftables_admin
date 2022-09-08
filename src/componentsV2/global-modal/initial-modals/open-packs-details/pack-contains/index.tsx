// @ts-nocheck
import React from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import get from 'lodash/get'

import OptionDefault from '/public/icon-options/option_a.svg'

import styles from './PackContains.module.scss'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { resetModal } from '@entities/modal/actions'

import { ExternalImage } from '@shared/ExternalImage'
import Button from '@shared/Button'

export default function PackContains () {
  const router = useRouter()
	const dispatch = useDispatch()
	const { id, name, imageUrl } = useTypedSelector(state => get(state, 'modal.data.collection', {}))

	const navigateToCollection = React.useCallback(() => {
    router.push(`/collections/${id}`)
		dispatch(resetModal())
	}, [router, id, dispatch])

  return (
    <div className={styles.wrapper}>
      <div className={styles['info-block']}>
        <div>This pack contains NFT from:</div>
        {imageUrl ? (
          <ExternalImage
						className={styles['image']}
						src={imageUrl}
					/>
        ) : (
          <OptionDefault />
        )}
        <div className={styles['collection-name']}>{name}</div>
      </div>
      <div className={styles['button-block']}>
        <Button
          size={'s'}
          color={'blue'}
          fillStyle={false}
          fullWidth={false}
          onClick={navigateToCollection}
        >
          Open Collection
        </Button>
      </div>
    </div>
  )
}
