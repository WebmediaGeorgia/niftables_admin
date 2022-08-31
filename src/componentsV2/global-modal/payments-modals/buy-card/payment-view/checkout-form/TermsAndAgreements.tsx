// @ts-nocheck
import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import CheckBox from '@commonV2/Checkbox'

function Label () {
	return (
		<StyledLabel>
			<span>
				By checking this box, I agree to
			</span>
			&nbsp;
			<Link href='#'>
				Niftables Terms of Service
			</Link>
		</StyledLabel>
	)
}

const StyledLabel = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  color: white;
  a {
    color: ${({ theme }) => theme.text.secondary};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`

export default function TermsAndAgreements ({ checked, changeHandler }) {
	const handleChange = React.useCallback((e) => {
		changeHandler(e.target.checked)
	}, [changeHandler])
	return (
		<StyledCheckBox
			size='small'
			color='default'
			label={<Label />}
			checked={checked}
			changeHandler={handleChange}
		/>
	)
}

const StyledCheckBox = styled(CheckBox)`
  input {
		border: 1px solid rgba(255, 255, 255, 0.5);;
	}
`
