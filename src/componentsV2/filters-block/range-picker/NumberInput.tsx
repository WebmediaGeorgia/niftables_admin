// @ts-nocheck
import React from 'react'
import cn from 'classnames'
import get from 'lodash/get'

import styles from './RangePicker.module.scss'

import { useTypedSelector } from '@hooks/useNewTypedSelector'
import { useNoInitialEffect } from '@hooks/useNoInitialEffect'

import Input from '@commonV2/Input'

export default function NumberInput ({ field, placeholder, blurHandler }) {
	const storeValue = useTypedSelector(state => get(state, `filter.${field}`, ''))
	const [value, setValue] = React.useState(storeValue || '')

	useNoInitialEffect(() => {
		if (storeValue !== value) setValue(storeValue)
	}, [storeValue])

	const sanitizeValue = React.useCallback((value) => {
		const rgx = /^[0-9]*\.?[0-9]*$/
		if (!value.match(rgx)) return
		setValue(value)
	}, [setValue])

  const handleBlur = React.useCallback((value) => {
    let sanitizedValue = value
    if (+value > 999999999.99) sanitizedValue = '999999999.99'
    if (+value <= 0) return sanitizedValue = '0.00'
    sanitizedValue = (+sanitizedValue).toFixed(2)
    setValue(sanitizedValue)
    blurHandler && blurHandler(sanitizedValue)
  }, [setValue, blurHandler])

	return (
		<Input
			className={cn(styles['input-wrapper'], 'm-0', 'w-auto')}
			placeholder={placeholder}
			value={value}
			changeHandler={sanitizeValue}
			blurHandler={handleBlur}
		/>
	)
}
