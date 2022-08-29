import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'

import { useTypedSelector } from '@hooks/useNewTypedSelector'

import BlockchainNetwork, { blockchainNetworkLabelConfig } from '@commonV2/BlockchainNetwork'

export default function PriceBlock () {
	const netwrork = useTypedSelector(state => get(state, 'modal.data.collection.network', {}))
	const price = useTypedSelector(state => +get(state, 'modal.data.price', ''))
	const usdRate = useTypedSelector(state => get(state, 'modal.data.collection.network.usdRate', ''))
	const priceInCrypto = React.useMemo(() => price / usdRate, [price, usdRate])

	return (
		<StyledWrapper>
			<div className='price-left-col'>
				<div className='price-left'>
					<div className='price-label'>
						Price in USD:
					</div>
					<div className='price-value'>
						${price.toFixed(2)}
					</div>
				</div>
			</div>
			<hr className='separator' />
			<div className='price-right-col'>
				<div className='price-right'>
					<div className='price-label'>
						Price in {blockchainNetworkLabelConfig[netwrork.name]}
					</div>
					<div className='price-value'>
						<BlockchainNetwork
							className='chain-network'
							network={netwrork}
						/>
						&nbsp;
						{priceInCrypto.toFixed(4)}
					</div>
				</div>
			</div>
		</StyledWrapper>
	)
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 65px;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
  .separator {
    @media only screen and (max-width: 480px) {
      width: 100%;
      margin: 20px 0;
    }
  }
  .price-left-col {
    display: flex;
    width: 50%;
    padding-right: 60px;
    @media only screen and (max-width: 480px) {
      width: 100%;
      padding-right: 0;
    }
    .price-left {
      margin-left: auto;
      @media only screen and (max-width: 480px) {
        margin: auto;
      }
    }
  }
  .price-right-col {
    display: flex;
    width: 50%;
    padding-left: 60px;
    @media only screen and (max-width: 480px) {
      width: 100%;
      padding-left: 0;
    }
    .price-right {
      margin-right: auto;
      @media only screen and (max-width: 480px) {
        margin: auto;
      }
    }
  }
  .price-label {
    color: rgba(255, 255, 255, 0.5);
    font-size: 14px;
    line-height: 21px;
    @media only screen and (max-width: 480px) {
      text-align: center;
    }
  }
  .price-value {
    display: flex;
    margin-top: 10px;
    font-size: 24px;
    font-weight: 700;
    line-height: 26px;
    @media only screen and (max-width: 480px) {
      justify-content: center;
    }
    .chain-network {
      span {
        font-size: 24px;
        font-weight: 700;
        line-height: 26px;
      }
      svg {
        flex: 0 0 20px;
        width: 20px;
        height: 20px;
      }
    }
  }
`
