import React from 'react'
import styled from 'styled-components'

import VectorRight from 'public/other/arrow_right.svg'

export default function NextHandler ({ currentPage, countOfPage, setCurrentPage }) {
  const handlePrevPage = React.useCallback(() => {
    if (currentPage >= countOfPage) return
    setCurrentPage(currentPage + 1)
  }, [currentPage, countOfPage, setCurrentPage])

  return (
    <StyledWrapper
      className='option'
      onClick={handlePrevPage}
      disabled={currentPage >= countOfPage}
    >
      <VectorRight width={12} height={19} />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  border-color: #e5e5e5;
  ${({ disabled }) => disabled && 'pointer-events: none'};
  ${({ disabled }) => disabled && 'opacity: 0.2'};
  svg {
    fill: ${({ theme }) => theme.text.white};
  }
`
