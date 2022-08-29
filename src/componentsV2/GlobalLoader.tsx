import React from 'react'
import ReactDOM from 'react-dom'
import BeatLoader from 'react-spinners/BeatLoader';
import styled from 'styled-components'

import { useTypedSelector } from '@hooks/useNewTypedSelector'

import isServer from '@utils/isServer'

export default function GlobalLoader () {
  const isGlobalLoading = useTypedSelector((state) => state.utils.isGlobalLoading)

  if (isServer()) return null
  if (!isGlobalLoading) return null

  return ReactDOM.createPortal(
    <StyledWrapper>
      <div className='back-drop' />
      <div className='container'>
        <span className='wrapper'>
          <BeatLoader
            loading
            margin={10}
            size={35}
            speedMultiplier={1}
          />
        </span>
      </div>
    </StyledWrapper>,
    document.getElementById('global-loader')
  )
}

const StyledWrapper = styled.div`
  .back-drop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(238, 238, 238, 0.3);
    z-index: 99;
    filter: blur(50px);
  }
  .container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    .wrapper {
      position: absolute;
      top: 0px;
      left: 0px;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 100;
      > span {
        > span {
          background: ${({ theme }) => theme.text.secondary};
        }
      }
    }
  }
`
