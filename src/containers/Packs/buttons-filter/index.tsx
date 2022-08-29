import React from 'react'
import cn from 'classnames'

import styles from './ButtonsFilter.module.scss'
import btnStyles from '@shared/Button/Button.module.scss'

import Button from '@shared/Button'

export default function ButtonsFilter ({ filterConfig, filter, setFilter }) {
	const parsedFilterConfig = React.useMemo(() => {
		return filterConfig.map(({ value, label }) => {
			return (
				<Button
					key={value}
					className={cn(styles.button, {
						[btnStyles['btn-secondary-active']]: filter === value,
					})}
					size='s'
					color='secondary'
					onClick={() => setFilter(value)}
				>
					{label}
				</Button>
			)
		})
	}, [filterConfig, filter, setFilter])

  return (
    <div className={styles.wrapper}>
			{parsedFilterConfig}
    </div>
  )
}
