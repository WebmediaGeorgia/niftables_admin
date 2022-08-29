// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'

import { ACTIVATABLE, REDEEMABLE, ACTIVATED } from '@constants/tokens'
import { REDEEM_CONFIRMATION, ACTIVATE_CONFIRMATION } from '@constants/modals'
import { NFT } from '@constants/payments'

import { setModal } from '@entities/modal/actions'

import ActivatedBadge from '@commonV2/badges/ActivatedBadge'
import Button from '@commonV2/Button'

const actionConfig = {
  [ACTIVATABLE]: {
    label: 'Activate Now',
    viewType: ACTIVATE_CONFIRMATION
  },
  [REDEEMABLE]: {
    label: 'Redeem Now',
    viewType: REDEEM_CONFIRMATION
  }
}

export default function ActionButton ({ token }) {
  const dispatch = useDispatch()
  const utilityStatus = token.utilityStatus

  const buttonLabel = React.useMemo(() => {
    const config = actionConfig[utilityStatus]
    if (!config) return ''
    return config.label
  }, [utilityStatus])

  const handleAction = React.useCallback((e) => {
    e.stopPropagation()
    const config = actionConfig[utilityStatus]
    if (!config) {
      console.warn(`Action with utilityStatus: ${utilityStatus} not implemented`)
      return
    }
    dispatch(setModal({
      isOpen: true,
			viewType: config.viewType,
      options: {
				type: NFT,
        initialPoint: config.viewType,
        actionPoint: config.viewType,
        token
			},
			data: token.nft
    }))
  }, [dispatch, token, utilityStatus])

  if (utilityStatus === ACTIVATED) {
    return <ActivatedBadge utilityStatus={utilityStatus} />
  }

  return (
    <Button
      clickHandler={handleAction}
    >
      {buttonLabel}
    </Button>
  )
}
