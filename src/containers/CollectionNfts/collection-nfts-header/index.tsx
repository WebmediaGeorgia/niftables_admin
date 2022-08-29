// @ts-nocheck
import React from 'react'
import { useRouter } from 'next/router'

import ArrowRight from '/public/field-icons/arrow-right.svg'

import styles from './CollectionNftsHeader.module.scss'

import { useTypedSelector } from '@hooks/useNewTypedSelector'

import Container from '@components/shared/Container'
import PageHeader from '@shared/PageHeader'
import { RevealedIn } from '@components/shared/RevealedIn'

export default function CollectionNftsHeader() {
  const router = useRouter()
  const collection = useTypedSelector((state) => state.collection.collection)
  const isUnrevealed = collection?.revealed === false && collection?.delayedReveal?.revealDate

  return (
    <div className={styles.wrapper}>
      <Container className={styles.general}>
        <div className={styles['back-to-collections']}>
          <ArrowRight />
          <div onClick={() => router.push('/collections')}>
            Back to collections
          </div>
        </div>
        <PageHeader className={styles.heading} imageUrl={collection?.imageUrl}>
          {collection?.name}
        </PageHeader>

        <div className={styles.text}>{collection?.description}</div>
        {isUnrevealed && (
          <RevealedIn date={collection.delayedReveal.revealDate} />
        )}
      </Container>
    </div>
  )
}
