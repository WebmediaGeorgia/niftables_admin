import React from 'react'

import { ALL, AVAILABLE, SOLD_OUT } from '@constants/packs'

import styles from './Packs.module.scss'

import Container from '@components/shared/Container'
import PageHeader from '@components/shared/PageHeader'
import ButtonsFilter from './buttons-filter'
import PacksList from './packs-list'

const filterConfig = [
	{
		value: ALL,
		label: 'All items'
	},
	{
		value: AVAILABLE,
		label: 'Available'
	},
	{
		value: SOLD_OUT,
		label: 'Sold Out'
	}
]

export default function Packs () {
	const [filter, setFilter] = React.useState(ALL)
	return (
		<Container className={styles.wrapper}>
			<PageHeader className={styles.header}>
				Packs
			</PageHeader>
			<div className={styles.description}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore.
			</div>
			<ButtonsFilter
				filterConfig={filterConfig}
				filter={filter}
				setFilter={setFilter}
			/>
			<PacksList filter={filter} />
		</Container>
	)
}
