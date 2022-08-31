// @ts-nocheck
import React from 'react'
import styled from 'styled-components'

import PrevHandler from './PrevHandler'
import NextHandler from './NextHandler'

export default function Pagination ({
  className = '', setCurrentPage, currentPage, countOfPage
}) {
  const createPageData = Array.from({ length: countOfPage }, (_, i) => i + 1)

  const activeRange = [...createPageData].slice(
    currentPage > 1 ? currentPage - 2 : currentPage - 1,
    currentPage + 1
  )

  const isItemInArr = (item) =>
    item === currentPage - 1 ||
    item === currentPage ||
    item === currentPage + 1 ||
    item === currentPage + 2

  if (!countOfPage || countOfPage === 1) return null

  return (
    <StyledWrapper className={className}>
      <PrevHandler
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <div className='optionLabelBox'>
        {!activeRange.some((i) => i === 1) && (
          <div
            className='option'
            onClick={() => setCurrentPage(1)}
          >
            1
          </div>
        )}
        {currentPage > 3 && <div className='option'>...</div>}
        {activeRange.map((item) => (
          isItemInArr(item) && (
            <div
              key={item}
              className={`option ${item === currentPage ? 'active' : ''}`}
              onClick={() => setCurrentPage(item)}
            >
              {item}
            </div>
          )
        ))}
        {currentPage < countOfPage - 2 && (
          <div className='option'>...</div>
        )}
        {currentPage < countOfPage - 1 && (
          <div
            className='option'
            onClick={() => setCurrentPage(countOfPage)}
          >
            {countOfPage}
          </div>
        )}
      </div>
      <NextHandler
        currentPage={currentPage}
        countOfPage={countOfPage}
        setCurrentPage={setCurrentPage}
      />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: space-around;
  gap: 9.5px;
  height: 50px;
  .option {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background: transparent;
    border: 1px solid white;
    border-radius: 8px;
    font-size: 18px;
    line-height: 27px;
    color: ${({ theme }) => theme.text.primary};
    cursor: pointer;
  }
  .option.active {
    background: #FF66C4;
    border-color: transparent;
    font-weight: 600;
    color: white;
  }
  .optionLabelBox {
    width: auto;
    display: flex;
    justify-content: space-around;
    gap: 4px;
  }
`
