// @ts-nocheck
import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'

import { useTypedSelector } from '@hooks/useNewTypedSelector'

import MediaPreview from '@commonV2/media-preview'

export default function Preview ({ className = '', data }) {
	const type = useTypedSelector(state => get(state, 'modal.options.type'))
	return (
		<StyledWrapper className={className}>
      <MediaPreview
        data={data}
        type={type}
      />
		</StyledWrapper>
	)
}

const StyledWrapper = styled.div`
  position: relative;
  width: 294px;
  height: 294px;
  flex-shrink: 0;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
  }
`
