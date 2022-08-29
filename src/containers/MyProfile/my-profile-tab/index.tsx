// @ts-nocheck
import React from 'react'

import styles from './MyProfileTab.module.scss'

import AllNfts from './AllNfts'
import UtilityNfts from './UtilityNfts'
import MergeableNfts from './MergeableNfts'
import AllPacks from './AllPacks'

export default function MyProfileTab () {
  return (
    <div className={styles.wrapper}>
      <AllNfts />
			<UtilityNfts />
			<MergeableNfts />
			<AllPacks />
    </div>
  )
}
