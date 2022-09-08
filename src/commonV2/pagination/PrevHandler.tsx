import React from 'react'
import styled from 'styled-components'

import VectorLeftIcon from 'public/other/arrow_left.svg'

export default function PrevHandler ({ currentPage, setCurrentPage }) {
  const handlePrevPage = React.useCallback(() => {
    if (currentPage === 1) return
    setCurrentPage(currentPage - 1)
  }, [currentPage, setCurrentPage])

  return (
    <StyledWrapper
      className='option'
      onClick={handlePrevPage}
      disabled={currentPage === 1}
    >
      <VectorLeftIcon width={12} height={19} />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  border-color: #e5e5e5;
  ${({ disabled }) => disabled && 'pointer-events: none'};
  ${({ disabled }) => disabled && 'opacity: 0.2'};
  svg {
    fill: ${({ disabled, theme }) => theme.text.white};
  }
`
