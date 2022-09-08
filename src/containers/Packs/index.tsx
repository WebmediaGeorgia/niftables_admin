import React from 'react'
import styled from 'styled-components'

import { ALL, AVAILABLE, SOLD_OUT } from '@constants/packs'

import ButtonsFilter from './ButtonsFilter'
import PacksList from './PacksList'

const filterConfig = [
	{
		value: ALL,
		label: 'All items'
	},
	{
		value: AVAILABLE,
		label: 'Available'
	},
	{
		value: SOLD_OUT,
		label: 'Sold Out'
	}
]

export default function Packs () {
	const [filter, setFilter] = React.useState(ALL)
	return (
		<StyledWrapper>
			<div className='page-title'>
				Packs
			</div>
      <div className='g-container g-mt-50'>
        <ButtonsFilter
          filterConfig={filterConfig}
          filter={filter}
          setFilter={setFilter}
        />
        <PacksList filter={filter} />
      </div>
		</StyledWrapper>
	)
}

const StyledWrapper = styled.div`
  margin-top: 150px;
  .page-title {
    font-size: 48px;
    font-weight: 700;
    text-align: center;
    @media only screen and (max-width: 768px) {
      font-size: 30px;
    }
  }
`
