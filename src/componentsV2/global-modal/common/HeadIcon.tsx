import React from 'react'
import styled from 'styled-components'

import CrossIcon from 'public/modal/cross-icon.svg'
import LockIcon from 'public/modal/lock-icon.svg'
import SuccessIcon from 'public/modal/success-icon.svg'
import WalletIcon from 'public/modal/wallet-icon.svg'
import InWalletIcon from 'public/modal/in-wallet-icon.svg'
import LetterIcon from 'public/modal/letter-icon.svg'

const config = {
	'cross': CrossIcon,
	'lock': LockIcon,
	'success': SuccessIcon,
  'wallet': WalletIcon,
  'in-wallet': InWalletIcon,
  'letter': LetterIcon
}

export default function HeadIcon ({ className = '', type }) {
	const icon = React.useMemo(() => {
		const Icon = config[type]
		if (!Icon) return null
		return <Icon className='icon' />
	}, [type])
	return (
		<StyledWrapper className={className}>
			{icon}
		</StyledWrapper>
	)
}

const StyledWrapper = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: rgba(255, 102, 196, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  .icon {
    path {
      fill: ${({ theme }) => theme.text.secondary};
    }
  }
`
