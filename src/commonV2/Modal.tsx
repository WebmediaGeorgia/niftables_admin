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
				<div className='art-1' />
				<div className='art-2' />
				<div className='art-3' />
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
		background-image: url(/assets/img/jungle/jungleModal-bg.webp);
		background-position: 50% 0;
		background-repeat: no-repeat;
		background-color: #163929;
    background-size: cover;
		border-radius: 8px;
		overflow: hidden;
		.art-1,
		.art-2 {
			position: absolute;
			inset: 0 -1px auto 0;
			z-index: 0;
			background-repeat: no-repeat;
      height: 245px;
      background-size: auto;
      @media only screen and (max-width: 540px) {
        height: 160px;
        background-size: contain;
      }
		}
		.art-1 {
			background-position: 0 0;
			background-image: url(/assets/img/jungle/jungleModal-top-leaves-left.webp);
		}
		.art-2 {
			background-position: 100% 0;
			background-image: url(/assets/img/jungle/jungleModal-top-leaves-right.webp);
		}
		.art-3 {
			position: absolute;
			inset: auto 0 0;
			height: 203px;
      background-size: auto;
			z-index: 0;
			background-repeat: no-repeat;
			background-position: 0 100%;
			background-image: url(/assets/img/jungle/jungleModal-bottom-leaves-left.webp);
      @media only screen and (max-width: 540px) {
        height: 150px;
			  background-size: contain;
      }
		}
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
					fill: ${({ theme }) => theme.text.secondary};
				}
			}
		}
		.icon-close {
			display: block;
			fill: ${({ theme }) => theme.text.primary};
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
