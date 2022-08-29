import React from 'react'
import ReactDOM from 'react-dom'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import IconClose from '/public/field-icons/icon-close.svg'

import { resetModal } from '@entities/global-preview/actions'

import isServer from '@utils/isServer'

export default function PreviewModal ({ children }) {
  const dispatch = useDispatch()

  const closeHandler = React.useCallback(() => {
    dispatch(resetModal())
  }, [dispatch])

  React.useEffect(() => {
    document.body.classList.add('g-overflow-hidden')
    return () => {
      document.body.classList.remove('g-overflow-hidden')
    }
  }, [])

  if (isServer()) return null

  return ReactDOM.createPortal(
    <StyledWrapper
      onClick={closeHandler}
    >
      <div className='close-modal'>
        <IconClose
          className='icon-close'
          width={18}
          height={18}
          onClick={closeHandler}
        />
      </div>
      <div
        className='content'
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </StyledWrapper>,
    document.getElementById('preview')
  )
}

const StyledWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  min-height: 100%;
  max-height: 100%;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: auto;
  z-index: 9999;
  .close-modal {
    position: absolute;
    top: 5%;
    right: 5%;
    padding: 20px;
    z-index: 2;
    cursor: pointer;
    .icon-close {
			display: block;
			fill: ${({ theme }) => theme.text.primary};
		}
  }
  .content {
    position: relative;
    width: calc(100vw - 40px);
    max-width: calc(100vh - 40px);
    height: calc(100vh - 40px);
    max-height: calc(100vw - 40px);
  }
`
