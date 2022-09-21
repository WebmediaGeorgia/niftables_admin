// @ts-nocheck
import React from 'react'
import styled from 'styled-components'

import Button from '@commonV2/Button'

export default function ButtonsFilter ({ filterConfig, filter, setFilter }) {
	const parsedFilterConfig = React.useMemo(() => {
		return filterConfig.map(({ value, label }) => {
			return (
				<Button
					key={value}
          className='button'
          colorScheme={filter === value ? 'primary' : 'transparent'}
					clickHandler={() => setFilter(value)}
				>
					{label}
				</Button>
			)
		})
	}, [filterConfig, filter, setFilter])

  return (
    <StyledWrapper>
			{parsedFilterConfig}
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    gap: 20px;
  }
  .button {
    text-transform: capitalize;
    height: 40px;
    width: 175px;
    letter-spacing: inherit;

    @media only screen and (max-width: 480px) {
      width: 100%;
    }
  }
`
