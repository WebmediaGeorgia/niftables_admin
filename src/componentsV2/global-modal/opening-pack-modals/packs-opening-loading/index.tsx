// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import loading from 'public/assets/img/loading_gif.gif'

import { OPENED_PACK } from '@constants/modals'

import { _getStore } from 'src/storage/configureStore'
import { setModal, setModalOptions, resetModal } from '@entities/modal/actions'
import { openPack } from '@requests/packs'

import Modal from '@commonV2/Modal'

export default function PacksOpeningLoading () {
	const dispatch = useDispatch()
  const router = useRouter()

	const closeHandler = React.useCallback(() => {
		router.push(router.asPath, undefined, { scroll: false })
		dispatch(resetModal())
	}, [router, dispatch])

	React.useEffect(() => {
		async function init () {
			const packId = _getStore().getState().modal.data.id
			const revealedNft = await openPack(packId)
			if (!revealedNft) return dispatch(resetModal())
			dispatch(setModalOptions({ revealedNft }))
			dispatch(setModal({ viewType: OPENED_PACK }))
		}
		init()
	}, [])

	return (
		<Modal
			closeHandler={closeHandler}
			size='l'
		>
			<StyledWrapper>
				<div className='loader-wrapper'>
					<img
						className='loader'
						src={loading.src}
						alt='Loading...'
					/>
				</div>
			</StyledWrapper>
		</Modal>
	)
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .loader-wrapper {
    position: relative;
    width: 350px;
    height: 350px;
    padding-bottom: 50%;
    border-radius: 20px;
    overflow: hidden;
    @media only screen and (max-width: 768px) {
      width: 300px;
      height: 300px;
    }
    .loader {
      position: absolute;
      width: 100%;
      height: 100%;
      background-blend-mode: luminosity;
      background: #22292f;
      opacity: 0.48;
      transform: rotate(90deg);
    }
  }
`
