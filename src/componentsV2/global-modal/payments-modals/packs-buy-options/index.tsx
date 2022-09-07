// @ts-nocheck
import React from 'react'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import get from 'lodash/get'

import { PACKS } from '@constants/payments'

import { RESERVATION, PRE_CRYPTO_CHECKOUT } from '@constants/modals'
import { CARD } from '@constants/payments'

import styles from './PacksBuyOptions.module.scss'
import btnStyles from '@components/shared/Button/Button.module.scss'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { setModal, setModalOptions } from '@entities/modal/actions'
import useMoveToInitialView from '@hooks/modal/useMoveToInitialView'

import Modal from '@commonV2/Modal'
import MediaPreview from '@commonV2/media-preview'
import Button from '@commonV2/Button'
import styled from "styled-components";
import BuyWith from "@componentsV2/global-modal/payments-modals/nft-buy-options/BuyWith";
import cn from "classnames";

export default function PacksBuyOptions () {
	const dispatch = useDispatch()
	const moveToInitialView = useMoveToInitialView()
	const pack = useTypedSelector(state => get(state, 'modal.data', {}))

	const moveToBuyCard = React.useCallback(() => {
		dispatch(setModalOptions({ method: CARD }))
		dispatch(setModal({ viewType: RESERVATION }))
	}, [dispatch])

	const moveToBuyCrypto = React.useCallback(() => {
		dispatch(setModal({ viewType: PRE_CRYPTO_CHECKOUT }))
	}, [dispatch])

	return (
		<Modal
			closeHandler={moveToInitialView}
			size='l'
		>
			<div className={styles.wrapper}>
				<div className={styles.media}>
					<MediaPreview
            data={pack}
            type={PACKS}
          />
				</div>
				<div className={styles.title}>{pack.name}</div>
				<div className={styles.collection}>
					<div className={styles['collection-title']}>NFT from</div>
					<Link href={`/collections/${pack.collection.id}`}>
						<a className={styles.link}>{pack.collection.name}</a>
					</Link>
				</div>
        <BuyingContainer>
          <BuyWith />
          <div className='buttons'>
            <Button
              clickHandler={moveToBuyCard}
            >
              Card
            </Button>
            <Button
              clickHandler={moveToBuyCrypto}
            >
              Crypto
            </Button>
          </div>
        </BuyingContainer>

				<div className={styles.description}>
					{pack.description}
				</div>
			</div>
		</Modal>
	)
}

const BuyingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 75%;

  .buttons {
    display: flex;
    gap: 15px;

    button {
      flex: 1 1 auto;
    }
  }
`
