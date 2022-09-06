// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import styled, { css } from 'styled-components'

import IconR from '/public/field-icons/menubar-r.svg'
import ButtonClose from '/public/assets/img/icon-close.svg'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { setIsFilterOpen } from '@entities/utils/actions'

export default function MenuBar ({ children }) {
  const dispatch = useDispatch()
  const isOpen = useTypedSelector((state) => state.utils.isFilterOpen)

  React.useEffect(() => {
    return () => {
      document.body.classList.remove('g-overflow-hidden')
    }
  }, [])

  const openFilter = React.useCallback(() => {
    document.body.classList.add('g-overflow-hidden')
    dispatch(setIsFilterOpen(true))
  }, [dispatch])
  const closeFilter = React.useCallback(() => {
    document.body.classList.remove('g-overflow-hidden')
    dispatch(setIsFilterOpen(false))
  }, [dispatch])
  const toggleFilter = React.useCallback(() => {
    dispatch(setIsFilterOpen(!isOpen))
  }, [dispatch, isOpen])

  return (
    <>
      <StyledMobileOpen onClick={openFilter}>
        <IconR className='icon' />
      </StyledMobileOpen>
      <StyledMenu
        isOpen={isOpen}
        onClick={(e) => e.stopPropagation()}
      >
        <StyledHeader isOpen={isOpen}>
          <StyledMobileClose onClick={closeFilter}>
            <ButtonClose className='icon' />
          </StyledMobileClose>
          <StyledDesktopHandler
            isOpen={isOpen}
            onClick={toggleFilter}
          >
            <IconR className='icon' />
          </StyledDesktopHandler>
          <div className='label'>
            Filters
          </div>
        </StyledHeader>
        <StyledMenuWrapper isOpen={isOpen}>
          {children}
        </StyledMenuWrapper>
      </StyledMenu>
    </>
  )
}

const StyledMobileOpen = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    position: relative;
    display: inline-flex;
    align-items: center;
    width: 50px;
    height: 60px;
    grid-row: 2/3;
    cursor: pointer;
  }
  .icon {
    path {
      fill: ${({ theme }) => theme.text.secondaryBlue};
    }
  }
`

const StyledMobileClose = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    flex: 0 0 23px;
    cursor: pointer;
  }
 .icon {
    path {
      fill: ${({ theme }) => theme.text.primary};
    }
  }
`

const StyledDesktopHandler = styled.div`
  display: block;
  flex: 0 0 23px;
  cursor: pointer;
  .icon {
    ${({ isOpen }) => isOpen && 'transform: rotate(180deg)'};
    path {
      fill: ${({ theme, isOpen }) => isOpen ? theme.text.white : theme.text.secondaryBlue };
    }
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`

const StyledMenu = styled.div`
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  grid-column: 1/2;
  grid-row: 2/4;
  flex-direction: column;
  flex: 1 0 auto;
  align-self: self-start;
  width: ${({ isOpen }) => isOpen ? '270px' : '22px'};
  max-width: ${({ isOpen }) => isOpen ? '270px' : '22px'};
  margin: 0 38px 0 -60px;
  margin-left: ${({ isOpen }) => isOpen ? 0 : '-60px'};
  padding: ${({ isOpen }) => isOpen ? '23px 24px 23px 0px' : '0px'};
  border: 1px solid transparent;
  border-radius: 0 5px 5px 0;
  background: transparent;
  backdrop-filter: none;
  ${({ isOpen }) => !isOpen && css `overflow: hidden`};
  transition: width 0.3s linear, margin 0.3s linear, left 0.3s linear, max-width 0.3s linear;
  z-index: 0;

  ${({ isOpen }) => isOpen && css`
    :before {
      content: '';
      position: absolute;
      z-index: -1;
      inset: 0 0 0 auto;
      width: 100vw;
      background-color: transparent;
    }
  `}
  @media only screen and (max-width: 1439px) {
    margin: 0 38px 0 0;
  }
  @media only screen and (max-width: 768px) {
    position: fixed;
    left: ${({ isOpen }) => isOpen ? '0%' : '-100%'};
    width: 100%;
    max-width: unset;
    border: none;
    background: rgba(21, 50, 36, 0.72);
    backdrop-filter: blur(24px);
    padding: 20px 0;
    z-index: ${({ isOpen }) => isOpen ? 50 : 1};
  }
`

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 22px;
  transition: padding 0.2s, justify-content 0.2s;
  ${({ isOpen }) => isOpen && css`
    flex-direction: row-reverse;
    padding: 0 0 17px;
  `};
  @media only screen and (max-width: 768px) {
    padding: 0 20px 20px;
  }
  .label {
    font-weight: 500;
    font-size: 24px;
    line-height: 34px;
    opacity: ${({ isOpen }) => isOpen ? 1 : 0};
    @media only screen and (max-width: 768px) {
      opacity: 1;
    }
  }
`

const StyledMenuWrapper = styled.div`
  left: -100%;
  opacity: 0;
  display: none;
  padding-left: 0;
  padding-right: 0;
  ${({ isOpen }) => isOpen && css`
    left: 0;
    opacity: 1;
    display: block;
    overflow-y: unset;
  `}
  ${({ isOpen }) => !isOpen && 'overflow: hidden'};
  transition: transform 0.2s, opacity 0.2s;
  @media only screen and (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
    ${({ isOpen }) => isOpen && css`
      overflow-y: auto;
    `}
  }
`
