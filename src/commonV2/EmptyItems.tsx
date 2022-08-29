// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { filtersReset } from '@entities/filters/actions'

import Button from '@commonV2/Button'

export default function EmptyItems ({ className = '', withReset }) {
  const dispatch = useDispatch();

  const resetFilters = React.useCallback(() => {
    dispatch(filtersReset())
  }, [dispatch])

  return (
    <StyledWrapper className={className}>
      <div className='label'>
        No items found for this search
      </div>
      {withReset && (
        <Button
          className='button'
          clickHandler={resetFilters}
        >
          Go to all items
        </Button>
      )}
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  width: 100%;
  margin: 60px auto 0;
  & .label {
    font-size: 28px;
    line-height: 44px;
    text-align: center;
  }
  & .button {
    margin: 30px auto 0;
    padding: 6px 30px;
  }
`
