// @ts-nocheck
import React from 'react'
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'
import cn from 'classnames'
import styled from 'styled-components'

import styles from './CheckoutForm.module.scss'

import Loader from '@commonV2/Loader'
import Spinner from './Spinner'
import TermsAndAgreements from './TermsAndAgreements'
import GasFee from './GasFee'
import FinalPrice from './FinalPrice'
import PayButton from './PayButton'

export default function CheckoutForm () {
  const stripe = useStripe()
	const elements = useElements()
	const [isLoading, setIsLoading] = React.useState(true)
	const [termsAccepted, setTermsAccepted] = React.useState(false)

  return (
		<StyledWrapper>
			<Spinner isLoading={isLoading} />
			<PaymentElement
				className={`payment-form ${isLoading ? 'hidden' : ''}`}
				onReady={() => setIsLoading(false)}
				options={{}}
			/>

			{!isLoading && (
				<div className='g-mt-15'>
					<TermsAndAgreements
						checked={termsAccepted}
						changeHandler={setTermsAccepted}
					/>
					<GasFee />
					<div className='action-wrapper'>
						<FinalPrice />
            <PayButton
              stripe={stripe}
              elements={elements}
              termsAccepted={termsAccepted}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
					</div>
				</div>
			)}
		</StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  font-size: 14px;

  .Input {
    background-color:  rgba(255, 255, 255, 0.05);;
  }

  .payment-form {
    min-height: 258px;
    margin: 15px 0 0;
    padding: 10px;
    background: transparent;
    border-radius: 8px;
  }
  .payment-form.hidden {
    background: none;
    visibility: hidden;
  }
  .action-wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
`
