import React from 'react'
import styled from 'styled-components'

import icon from 'public/other/time-icon.png'

import useTimer from '@hooks/useTimer'

import LegendBlock from '@commonV2/LegendBlock'

export default function RevealedIn ({
  className = '', endDate, label = '', revealedText = ''
}) {
  const timer = useTimer(endDate)

  const parsedValue = React.useMemo(() => {
    if (!timer) return revealedText
    return timer
  }, [timer])

  if (!endDate) return null

  return (
    <StyledLegendBlock
      className={className}
      label={label}
    >
      <img
        className='icon'
        src={icon.src}
      />
      <div className='counter'>
        {parsedValue}
      </div>
    </StyledLegendBlock>
  )
}

const StyledLegendBlock = styled(LegendBlock)`
  margin: 0;
  .description {
    display: flex;
    align-items: center;
    justify-content: center;
    .icon {
      display: block;
      width: 28px;
      height: 28px;
    }
    .counter {
      font-size: 20px;
      font-weight: 700;
    }
  }
`
