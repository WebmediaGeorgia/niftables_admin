import React from 'react'
import get from 'lodash/get'

import { useTypedSelector } from '@hooks/useNewTypedSelector'

import RevealedIn from '@commonV2/RevealedIn'

export default function RevealeDetails () {
	const revealed = useTypedSelector(state => get(state, 'modal.data.collection.revealed'))
	const revealDate = useTypedSelector(state => get(state, 'modal.data.collection.delayedReveal.revealDate'))
  if (revealed) return null
  return (
    <RevealedIn
      className='revealed-in'
      label='NFT will reveal in'
      endDate={revealDate}
    />
  )
}
