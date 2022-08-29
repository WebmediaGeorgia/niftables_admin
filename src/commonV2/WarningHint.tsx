import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import InfoIcon from 'public/other/info-icon.svg'

import { AbilityToBuyValues } from '@type/restriction'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import {
  checkAbilityToBuyRequest,
  resetAbilityToBuy,
} from '@entities/nft_collection/redux/actions'

export default function WarningHint ({ className = '', collectionId }) {
  const dispatch = useDispatch()
  const abilityToBuy = useTypedSelector((state) => state.nftCollection.abilityToBuy)

  React.useEffect(() => {
    if (collectionId) {
      dispatch(checkAbilityToBuyRequest({ id: collectionId }))
    }
  }, [collectionId])

  React.useEffect(() => {
    return () => {
      dispatch(resetAbilityToBuy())
    }
  }, [])

  if (!abilityToBuy) return null
  if (abilityToBuy === AbilityToBuyValues.SUCCESS) return null

  return (
    <StyledWrapper className={className}>
      <div className='warning-wrapper'>
        <InfoIcon className='icon' />
        {abilityToBuy}
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  margin-top: 10px;
  .warning-wrapper {
    display: inline-flex;
    align-items: center;
    padding: 7px 17px;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    color: ${({ theme }) => theme.text.primary};
    border: 1px solid #dadada;
    border-radius: 14px;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.075) 0%,
      rgba(255, 255, 255, 0.075) 100%
    );
    .icon {
      flex-shrink: 0;
      margin-right: 5px;
      path {
        fill: var(--info-hint-ColorText);
      }
    }
  }
`
