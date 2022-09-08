// @ts-nocheck
import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import useMoveToBuyOptions from '@hooks/modal/useMoveToBuyOptions'
import { AbilityToBuyValues } from '@type/restriction'

import WarningHint from '@commonV2/WarningHint'
import BuyOrSignin from '@commonV2/BuyOrSignin'
import Button from '@commonV2/Button'
import PriceCol from '../../../common/details/PriceCol'

export default function BuyButton () {
	const pack = useTypedSelector(state => get(state, 'modal.data', {}))
  const isAbilityToBuy = useTypedSelector((state) => {
    return state.nftCollection.abilityToBuy === AbilityToBuyValues.SUCCESS
  })
	const moveToBuyOptions = useMoveToBuyOptions()
	const { availableSupply, packsNft, price } = pack
	const collectionId= pack?.collection?.id

  if (availableSupply === 0) return null
  if (packsNft) return null

  return (
    <StyledWrapper>
      <div className='button-wrapper'>
        <BuyOrSignin>
          <Button
            disabled={!isAbilityToBuy}
            clickHandler={moveToBuyOptions}
          >
            Buy Now
          </Button>
        </BuyOrSignin>
        <PriceCol
          className='g-ml-30'
          item={pack}
        />
      </div>
      <WarningHint collectionId={collectionId} />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  margin: 20px 0 32px;
  .button-wrapper {
    display: flex;
    align-items: center;
  }
`
