import React from 'react'
import styled from 'styled-components'

import Placeholder from 'public/assets/img/img-placeholder.svg'

import { VIDEO, AUDIO, IMAGE } from '@constants/media-types'

import Video from './Video'
import Audio from './Audio'
import Image from './Image'

import normalizePreview from '@utils/entities/normalizePreview'
import parseMediaType from '@utils/entities/parseMediaType'

const previewsConfig = {
	[VIDEO]: Video,
	[AUDIO]: Audio,
	[IMAGE]: Image,
}

export default function MediaPreview ({ className, data, type, withoutFullView }) {
  const preview = normalizePreview({ data, type })

	const parsedPreview = React.useMemo(() => {
    if (!preview || !preview.mediaUrl) return <Placeholder className='placeholder' />
		const type = parseMediaType(preview.mediaType)
		if (!type) return <Placeholder className='placeholder' />
		const Component = previewsConfig[type]
		if (!Component) {
			console.warn(`Media type: ${preview.mediaType}, not implemented`)
			return <Placeholder className='placeholder' />
		}
		return (
      <Component
        preview={preview}
        withoutFullView={withoutFullView}
      />
    )
	}, [preview, withoutFullView])

	return (
		<StyledWrapper className={className}>
			{parsedPreview}
		</StyledWrapper>
	)
}

const StyledWrapper = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
	width: 100%;
  border-radius: 8px;
  overflow: hidden;

  & .placeholder {
    width: 94px;
    height: 94px;
    margin: auto;
  }
  & .image {
    border-radius: 8px;
  }
`
