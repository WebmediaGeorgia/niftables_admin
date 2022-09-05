// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'

import { PACKS } from '@constants/payments'
import { OPEN_PACKS_DETAILS } from '@constants/modals'

import styles from './UserPacksList.module.scss'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { setModal } from '@entities/modal/actions'

import { PackCard } from '@components/pack/PackCard'
import Container from '@components/shared/Container'
import EmptyView from '@components/shared/EmptyView'

import { createPackFromToken } from '@utils/pack-utils'

export default function UserPacksList () {
	const dispatch = useDispatch()
  const packs = useTypedSelector((state) => state.userPacks.packs)

  const handleCardClick = React.useCallback((pack) => {
		dispatch(setModal({
			isOpen: true,
			viewType: OPEN_PACKS_DETAILS,
			options: {
				type: PACKS,
        initialPoint: OPEN_PACKS_DETAILS,
        actionPoint: OPEN_PACKS_DETAILS
			},
			data: pack
		}))
	}, [dispatch])

	if (!packs) return null

	if (packs.length === 0) {
		return (
			<EmptyView
				emoji='😿'
				btnUrl='/packs'
				btnText='Buy Pack'
				text='No items to display'
			/>
		)
	}

  return (
    <Container className={styles.wrapper}>
      {packs.map((pack) => (
        <PackCard
          key={pack.id}
          item={createPackFromToken(pack)}
          onCardClick={handleCardClick}
          onButtonClick={handleCardClick}
        />
      ))}
    </Container>
  )
}
