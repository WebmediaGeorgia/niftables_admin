import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import IconClose from '/public/field-icons/icon-close.svg'

import isServer from '@utils/isServer'

export default function Modal ({
	closeHandler, size, children
}) {

  React.useEffect(() => {
    document.body.classList.add('g-overflow-hidden')
    return () => {
      document.body.classList.remove('g-overflow-hidden')
    }
  }, [])

	if (isServer()) return null

  return ReactDOM.createPortal(
    <StyledWrapper
      size={size}
			onClick={closeHandler}
		>
      <div
				className='modal'
				onClick={(e) => e.stopPropagation()}
			>
				<div className='close-modal'>
					<IconClose
						className='icon-close'
						width={18}
						height={18}
						onClick={closeHandler}
					/>
				</div>
        <div className='content'>
          {children}
        </div>
      </div>
    </StyledWrapper>,
		document.getElementById('modal')
  )
}

const StyledWrapper = styled.div.attrs(({ size }) => {
  const config = {
    'l': 800
  }
  return { maxWidth: config[size] || 600 }
})`
  position: fixed;
  left: 0;
  top: 0;
	display: flex;
  justify-content: center;
  min-width: 100%;
  min-height: 100%;
  max-height: 100%;
  padding: 30px 15px;
  background-color: rgba(0, 0, 0, 0.4);
  overflow: auto;
  z-index: 999;
  .modal {
		position: relative;
		margin: auto;
		width: 100%;
		max-width: ${({ maxWidth }) => maxWidth}px;
		background-image: url(/assets/img/superlotls/small-pop-up-bg.png);
		background-position: 50% 0;
		background-repeat: no-repeat;
    background-size: 100% 100%;
		border-radius: 8px;
		overflow: hidden;

		.close-modal {
			position: absolute;
			top: 10px;
			right: 5px;
			padding: 20px;
			z-index: 2;
			cursor: pointer;
      @media only screen and (max-width: 768px) {
				top: 0;
			  right: 0;
			}
			&:hover {
				.icon-close {
          opacity: 0.5;
				}
			}
		}
		.icon-close {
			display: block;
			fill: white;
      opacity: 0.3;
		}
		.content {
			position: relative;
			padding: 50px;
			width: 100%;
			z-index: 1;
			@media only screen and (max-width: 768px) {
				padding: 50px 20px;
			}
		}
	}
`
