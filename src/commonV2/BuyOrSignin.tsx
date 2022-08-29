// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { resetModal } from '@entities/modal/actions'
import { AbilityToBuyValues } from '@type/restriction'

import Button from '@commonV2/Button'

import { isLoggedIn, user2FAPassed } from '@utils/token'

export default function BuyOrSignin ({ className = '', clickHandler }) {
	const dispatch = useDispatch()
  const router = useRouter()
  const isAbilityToBuy = useTypedSelector((state) => {
    return state.nftCollection.abilityToBuy === AbilityToBuyValues.SUCCESS
  })

  const navigateToSignin = React.useCallback(() => {
    router.push('/signin')
    dispatch(resetModal())
  }, [router, dispatch])

  if (isLoggedIn() && user2FAPassed()) {
    return (
      <Button
        className={className}
        disabled={!isAbilityToBuy}
        clickHandler={clickHandler}
      >
        Buy Now
      </Button>
    )
  }
  return (
    <Button
      className={className}
      clickHandler={navigateToSignin}
    >
      Sign in to buy
    </Button>
  )
}
