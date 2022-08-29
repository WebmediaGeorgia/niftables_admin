// @ts-nocheck
import React from 'react'

import styles from './RedeemList.module.scss'

import { useTypedSelector } from '@hooks/useNewTypedSelector'

import EmptyItems from '@commonV2/EmptyItems'
import RedeemCard from './redeem-card'

export default function RedeemList () {
  const tokens = useTypedSelector(state => state.redeem.tokens)

  if (!tokens) return null

  if (tokens.length === 0) {
    return <EmptyItems />
  }

  return (
    <div className={styles.list}>
      {tokens.map(token => {
        return (
          <RedeemCard
            key={token.id}
            token={token}
          />
        )
      })}
    </div>
  )
}
