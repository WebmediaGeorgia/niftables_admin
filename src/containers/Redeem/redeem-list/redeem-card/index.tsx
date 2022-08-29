// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import cn from 'classnames'
// import Link from 'next/link'

import { REDEEM_DETAILS } from '@constants/modals'
import { NFT } from '@constants/payments'

import styles from './RedeemCard.module.scss'

import { setModal } from '@entities/modal/actions'

import BlockchainNetwork from '@commonV2/BlockchainNetwork'
import MediaPreview from '@commonV2/media-preview'
import Title from './Title'
import Creator from './Creator'
import ActionButton from './ActionButton'
import Collection from './Collection'
import BadgesList from './BadgesList'
import Score from './Score'
import UtilityInformation from './UtilityInformation'

export default function RedeemCard ({ token }) {
  const dispatch = useDispatch()

  const openRedeemDetails = React.useCallback(() => {
    dispatch(setModal({
      isOpen: true,
			viewType: REDEEM_DETAILS,
      options: {
				type: NFT,
        initialPoint: REDEEM_DETAILS,
        actionPoint: REDEEM_DETAILS,
        token
			},
			data: token.nft
    }))
  }, [dispatch, token])

  return (
    <div
      className={styles.redeemItem}
      onClick={openRedeemDetails}
    >
      <div className={styles.media}>
        <MediaPreview
          data={token.nft}
          type={NFT}
          withoutFullView
        />
      </div>
      <div className={styles.wrapper}>
        <div>
          <div className={styles['title-wrapper']}>
            <Title token={token} />
            <ActionButton token={token} />
          </div>
          <div className={cn(styles.statistic, 'g-mt-10')}>
            <Creator token={token} />
            <div className={styles.owner}>
              <Collection token={token} />
              <BlockchainNetwork network={token.nft.collection?.network} />
            </div>
          </div>
        </div>

        <hr className={styles['line-modal']} />
        <div className={styles.metaData}>
          <BadgesList token={token} />
          <Score token={token} />
        </div>
        <UtilityInformation token={token} />
        {/* <div className={styles.moreAbout}>
          <Link href={'#'}>
            <a className={styles['moreAbout-link']}>See more about NFT</a>
          </Link>
        </div> */}
      </div>
    </div>
  )
}
