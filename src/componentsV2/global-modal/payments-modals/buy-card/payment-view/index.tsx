// @ts-nocheck
import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import get from 'lodash/get'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { $apiWithToken } from 'src/common/api';

import Title from './Title'
import LinkToCollection from './LinkToCollection'
import CheckoutForm from './checkout-form'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY as string, { locale: 'en', })

const stripeOptions = {
  fonts: [
		{
      cssSrc:'https://fonts.googleapis.com/css?family=Oswald',
      family: 'Oswald',
    }
  ],
  appearance: {
    variables: {
      fontFamily: 'Oswald',
      fontSizeSm: '16px',
      fontSizeBase: '16px',
      spacingUnit: '5px',
      colorDanger: '#fd7465',

      colorPrimary: '#0570de',
      colorBackground: '#4F83C9',
      colorTextPlaceholder: '#DEE2E6',
      colorText: 'white',
    },
    rules: {
      ".Input::placeholder": {
        opacity: "0.6"
      }
    }
  },
}

export default function PaymentView () {
	const type = useTypedSelector(state => get(state, 'modal.options.type'))
	const item = useTypedSelector(state => get(state, 'modal.data', {}))
  const [clientSecret, setClientSecret] = React.useState()

  React.useEffect(() => {
    const payload = {
      reference: type,
      referenceId: item.id,
      currency: 'USD',
      type: 'STRIPE',
    }
    $apiWithToken
      .post('/payments', payload)
      .then(({ data }) => setClientSecret(data.clientSecret))
      .catch((err) => {
        console.log('payment request failed: ', err)
      })
  }, [])

  return (
    <div>
      <Title />
      <LinkToCollection />
      <div className='g-h-separator g-mt-10' />
      {clientSecret && (
        <Elements
					stripe={stripePromise}
					options={{
						...stripeOptions,
						clientSecret
					}}
				>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  )
}
