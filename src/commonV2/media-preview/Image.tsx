// @ts-nocheck
import React from 'react'
import NextImage from 'next/image'
import { useDispatch } from 'react-redux';

import { setModal } from '@entities/global-preview/actions'

export default function Image ({ preview, withoutFullView }) {
  const dispatch = useDispatch()

  const openPreview = React.useCallback(() => {
    if (withoutFullView) return
    dispatch(setModal({ isOpen: true, preview }))
  }, [dispatch, withoutFullView, preview])

	return (
		<NextImage
			className='image'
			src={preview.mediaUrl}
			alt='NFT'
      layout='fill'
      objectFit='contain'
      objectPosition='top center'
      onClick={openPreview}
		/>
	)
}
