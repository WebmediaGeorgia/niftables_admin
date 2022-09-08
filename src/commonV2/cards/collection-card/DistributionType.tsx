import React from 'react'
import styled from 'styled-components'

const distributionsConfig = {
  'AUCTION': 'Auction',
  'FIXED_PRICE': 'Buy now',
  'PACKS': 'Packs'
}

export default function DistributionType ({ distribution }) {
  const parsedDistribution = React.useMemo(() => {
    const label = distributionsConfig[distribution]
    if (!label) {
      console.warn(`Distributions with type: ${distribution} not implememnted`)
      return ''
    }
    return label
  }, [distribution])

  return (
    <StyledWrapper className='g-mt-10'>
      <div>
        Distribution type:&nbsp;
      </div>
      <div>
        <b>{parsedDistribution}</b>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  font-size: 15px;
  font-weight: 300;
  line-height: 15px;
  color: #0d4b9e;
  opacity: .5;
`
