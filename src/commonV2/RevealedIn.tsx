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
    <StyledContainer
      className={className}
    >
      <div className='label'>{label}</div>
      <div className='description'>
        <img
          className='icon'
          src={icon.src}
        />
        <div className='counter'>
          {parsedValue}
        </div>
      </div>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  background: rgba(7,3,31,0.3);
  border-radius: 100px;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  padding: 5px;

  .label {
    font-weight: 300;
    font-size: 15px;
    line-height: 22px;
  }

  .icon {
    display: block;
    width: 22px;
    height: 22px;
  }

  .description {
    display: flex;
    align-items: center;
  }

  .counter {
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
  }
`
