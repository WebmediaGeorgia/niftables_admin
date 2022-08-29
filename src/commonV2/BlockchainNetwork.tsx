import React from 'react'
import styled from 'styled-components'
import cn from 'classnames'

import BscIcon from 'public/blockchain-networks/bsc.svg'
import EthIcon from 'public/blockchain-networks/eth.svg'
import MaticIcon from 'public/blockchain-networks/matic.svg'

export const BNB = 'Binance Smart Chain'
export const ETH = 'Ethereum'
export const MATIC = 'Polygon'

export const blockchainNetworkLabelConfig = {
  [BNB]: 'BNB',
  [ETH]: 'ETH',
  [MATIC]: 'MATIC',
}

export const blockchainNetworkIconConfig = {
  [BNB]: {
    className: 'bsc-icon',
    Icon: BscIcon,
  },
  [ETH]: {
    className: 'eth-icon',
    Icon: EthIcon,
  },
  [MATIC]: {
    className: 'matic-icon',
    Icon: MaticIcon,
  },
}

export default function BlockchainNetwork ({ className = '', network }) {
  const hasName = network && network.name
  const name = hasName ? network.name : ''
  const icon = React.useMemo(() => {
    const iconConfig = blockchainNetworkIconConfig[name]
    if (!iconConfig) {
      console.warn(`Blockchain Network Icon with type: ${name} not implemented`)
      return null
    }
    const { Icon, className } = iconConfig
    return <Icon className={`icon ${className}`} />
  }, [name])
  const label = React.useMemo(() => {
    return blockchainNetworkLabelConfig[name] || ''
  }, [name])
  return (
    <StyledWrapper className={className}>
      {icon}
      <span className='label'>{label}</span>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  .icon {
    margin-right: 3px;
    flex: 0 0 12px;
    width: 12px;
    height: 12px;
  }
  .bsc-icon {
    path {
      fill: #fff;
    }
  }
  .eth-icon {
    & :nth-child(1) {
      fill: #f1f1f1;
    }
    & :nth-child(2) {
      fill: #fff;
    }
    & :nth-child(3) {
      fill: #f1f1f1;
    }
    & :nth-child(4) {
      fill: #fff;
    }
    & :nth-child(5) {
      fill: #d0d0d0;
    }
    & :nth-child(6) {
      fill: #f1f1f1;
    }
  }
  .matic-icon {
    & :nth-child(1) {
      fill: #f1f1f1;
    }
    & :nth-child(2) {
      fill: #f1f1f1;
    }
    & :nth-child(3) {
      fill: #fff;
    }
    & :nth-child(4) {
      fill: #d0d0d0;
    }
    & :nth-child(5) {
      fill: #f1f1f1;
    }
    & :nth-child(6) {
      fill: #d0d0d0;
    }
    & :nth-child(7) {
      fill: #fff;
    }
  }
  .label {
    font-size: 9px;
    font-weight: 700;
    line-height: 14px;
    color: ${({ theme }) => theme.text.primary};
  }
`
