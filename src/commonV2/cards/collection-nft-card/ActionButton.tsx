// @ts-nocheck
import React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import OpenSeaIcon from 'public/other/open-sea-icon.svg'

function OpenSeaLink ({ openSeaLink }) {
  return (
    <StyledOpenSeaLink
      href={openSeaLink}
      onClick={(e) => e.stopPropagation()}
      rel='noopener noreferrer'
      target='_blank'
    >
      Buy now
    </StyledOpenSeaLink>
  )
}

const StyledOpenSeaLink = styled.a`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  text-align: right;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text.secondary};
  text-decoration: none;
`

function SoldOut () {
  return (
    <StyledSoldOut>
      Sold Out
    </StyledSoldOut>
  )
}

const StyledSoldOut = styled.div`
  font-size: 12px;
  line-height: 18px;
  color: ${({ theme }) => theme.text.secondary};
`

function BuyButton ({ distribution }) {
  const router = useRouter()

  const navigateToPacks = React.useCallback((e) => {
    if (distribution !== 'PACKS') return
    e.stopPropagation()
    router.push('/packs')
  }, [distribution, router])

  return (
    <StyledBuyButton
      onClick={navigateToPacks}
    >
      {distribution === 'PACKS' ? 'Buy in Packs' : 'Buy now'}
    </StyledBuyButton>
  )
}

const StyledBuyButton = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text.secondary};
`

export default React.memo(function ActionButton ({
  availableSupply, openSeaLink, distribution
}) {
  if (openSeaLink) return <OpenSeaLink openSeaLink={openSeaLink} />

  if (!availableSupply) return <SoldOut />

  return <BuyButton distribution={distribution} />
})
