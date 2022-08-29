// @ts-nocheck
import React from 'react'
import NextImage from 'next/image'

import { useTypedSelector } from '@hooks/useNewTypedSelector'

import PreviewModal from '@commonV2/PreviewModal'

export default function GlobalPreview () {
	const isOpen = useTypedSelector(state => state.globalPreview.isOpen)
	const preview = useTypedSelector(state => state.globalPreview.preview)

  if (!isOpen) return null

  return (
    <PreviewModal>
      <NextImage
        src={preview.mediaUrl}
        alt='NFT'
        layout='fill'
        objectFit='contain'
        objectPosition='center center'
      />
    </PreviewModal>
  )
}
