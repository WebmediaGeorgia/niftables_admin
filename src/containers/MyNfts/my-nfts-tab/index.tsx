// @ts-nocheck
import React from 'react'
import classNames from 'classnames'

import styles from './MyNFTsTab.module.scss'
import sGrid from '@styles/sGrid.module.scss'

import Container from '@components/shared/Container'
import ProfileSearchBlock from './profile-search-block'
import ProfileFilterBlock from './profile-filter-block'

import PaginationFilter from '@componentsV2/filters-block/pagination-filter'
import UserNftsList from './user-nfts-list'

export default function MyNftsTab () {
  const scrollRef = React.useRef<HTMLDivElement>(null)
  return (
		<Container>
			<div
				ref={scrollRef}
				className={styles.wrapper}
			>
				<ProfileSearchBlock />
				<ProfileFilterBlock />
				<div className={styles.listWrapper}>
					<div className={classNames(styles['nft-wrapper'], sGrid.list)}>
						<UserNftsList />
					</div>
				</div>
			</div>

			<PaginationFilter
				scrollRef={scrollRef}
				field='userNftTokens'
			/>
		</Container>
  )
}
