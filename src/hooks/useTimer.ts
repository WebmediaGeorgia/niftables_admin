// @ts-nocheck
import React from 'react'
import isValid from 'date-fns/isValid'

const UNITS = ['s', 'm', 'h', 'd']

function getInitialCountDown (endDate) {
	const end = +(new Date(endDate))
	if (!isValid(end)) return 0
	const start = +(new Date())
	const diff = end - start
	return diff
}

export default function useTimer (endDate) {
  const intervalRef = React.useRef()
	const [countDown, setCountDown] = React.useState(getInitialCountDown(endDate))

	React.useEffect(() => {
		intervalRef.current = setInterval(() => setCountDown(current => current - 1000), 1000);
    return () => clearInterval(intervalRef.current);
	}, [])

	React.useEffect(() => {
		if (countDown <= 0) clearInterval(intervalRef.current)
	}, [countDown])

	return React.useMemo(() => {
		if (countDown <= 0) return null
		const days = Math.floor(countDown / (1000 * 60 * 60 * 24))
		const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
		const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))
		const seconds = Math.floor((countDown % (1000 * 60)) / 1000)
		const result = []
		result.push(seconds)
		result.push(minutes)
		if (days || hours) result.push(hours)
		if (days) result.push(days)
		return result
			.map(value => value.toString().padStart(2, '0'))
      .map((value, i) => `${value}${UNITS[i]}`)
      .reverse()
      .slice(0, 3)
			.join(' : ')
	}, [countDown])
}
