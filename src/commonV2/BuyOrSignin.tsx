// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

import { resetModal } from '@entities/modal/actions'

import Button from '@commonV2/Button'

import { isLoggedIn, user2FAPassed } from '@utils/token'

export default function BuyOrSignin ({ className = '', children }) {
	const dispatch = useDispatch()
  const router = useRouter()

  const navigateToSignin = React.useCallback(() => {
    router.push('/signin')
    dispatch(resetModal())
  }, [router, dispatch])

  if (isLoggedIn() && user2FAPassed()) return children

  return (
    <Button
      className={className}
      clickHandler={navigateToSignin}
    >
      Sign in to buy
    </Button>
  )
}
