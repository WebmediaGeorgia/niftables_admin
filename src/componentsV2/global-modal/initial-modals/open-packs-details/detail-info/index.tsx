// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import cn from 'classnames'
import get from 'lodash/get'

import PersonSmall from '/public/field-icons/person-small.svg'
import ValidUser from 'public/field-icons/valid-user.svg'

import { PACKS_OPENING_LOADING } from '@constants/modals'

import styles from './DetailInfo.module.scss'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { setModal } from '@entities/modal/actions'

import Badge from '@components/shared/Badge'
import BlockchainNetwork from '@commonV2/BlockchainNetwork'
import Button from '@commonV2/Button'

export default function DetailInfo () {
	const dispatch = useDispatch()
	const pack = useTypedSelector(state => get(state, 'modal.data', {}))

  const handleOpenPack = React.useCallback(() => {
		dispatch(setModal({ viewType: PACKS_OPENING_LOADING }))
	}, [dispatch])

  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.title}>{pack.name}</div>
        <div className={styles.statistic}>
          <div className={styles.owner}>
            <div>Owner:</div>
            <div className={styles.img}>
              <PersonSmall
                className={styles['icon-person']}
                width='18px'
                height='18px'
              />
            </div>
            <b>{pack.collection?.whitelabel.name || ''}</b>
          </div>
        </div>
        {pack.collection && (
          <div
            className={cn(styles.statistic, styles['sub-statistic'])}
          >
            <div
              className={cn(styles.owner, styles['owner-collection'])}
            >
              <div>Collection:</div>
              <Link href={`/collections/${pack.collection.id}`}>
                <a className={styles.link}>{pack.collection.name}</a>
              </Link>
            </div>
            <BlockchainNetwork network={pack.collection.network} />
          </div>
        )}
        <div className={styles['badge-description']}>
          In this pack the chances to get an NFT of rarity:
        </div>
        <div className={styles['badge-list']}>
          {Object.keys(pack.contentRule)
            .filter((rule) => pack.contentRule[rule] !== 0)
            .map((rule, index) => (
              <Badge key={index} rounded color='secondary' size='m'>
                {rule}
              </Badge>
            ))}
        </div>
      </div>
      <div className='g-d-flex'>
        <Button
          clickHandler={handleOpenPack}
        >
          Open now
        </Button>
      </div>
    </div>
  )
}
