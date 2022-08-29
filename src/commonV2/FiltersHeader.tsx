// @ts-nocheck
import React from 'react'
import styled from 'styled-components'

import PageHeader from '@shared/PageHeader'

export default function FiltersHeader ({ className = '', title, subTitile }) {
  return (
    <StyledWrapper className={className}>
			{title && (
				<PageHeader className='title'>
					{title}
				</PageHeader>
			)}
			{subTitile && (
				<div className='sub-title'>
					{subTitile}
      	</div>
			)}
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  padding: 150px 0 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  .title {
    margin-bottom: 15px;
  }
  .sub-title {
    max-width: 605px;
    margin: 0 auto 100px;
    padding: 0 20px;
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
    text-align: center;
  }
`
