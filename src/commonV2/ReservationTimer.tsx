// @ts-nocheck
import React from 'react'
import isValid from 'date-fns/isValid'
import styled from 'styled-components'

function getInitialCountDown (endDate) {
	const end = +(new Date(endDate))
	if (!isValid(end)) return 0
	const start = +(new Date())
	const diff = end - start
	return diff
}

export default function ReservationTimer ({ className = '', endDate }) {
	const intervalRef = React.useRef()
	const [countDown, setCountDown] = React.useState(getInitialCountDown(endDate))

	React.useEffect(() => {
		intervalRef.current = setInterval(() => setCountDown(current => current - 1000), 1000);
    return () => clearInterval(intervalRef.current);
	}, [])

	React.useEffect(() => {
		if (countDown <= 0) clearInterval(intervalRef.current)
	}, [countDown])

	const parsedCountDown = React.useMemo(() => {
		if (countDown <= 0) return 'Time expired'
		const days = Math.floor(countDown / (1000 * 60 * 60 * 24))
		const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
		const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))
		const seconds = Math.floor((countDown % (1000 * 60)) / 1000)
		const result = []
		if (days) result.push(days)
		if (days || hours) result.push(hours)
		result.push(minutes)
		result.push(seconds)
		return result
			.map(value => value.toString().padStart(2, '0'))
			.join(':')
	}, [countDown])

  return (
    <StyledWrapper className={className}>
      <span className='timer-countdown'>
				{parsedCountDown}
			</span>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  font-weight: 300;
  font-size: 15px;
  line-height: 22px;
  color: ${({ theme }) => theme.text.white};
  .timer-countdown {
    font-weight: 500;
  }
`
