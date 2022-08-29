// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'

import btnStyles from '@components/shared/Button/Button.module.scss'
import styles from '../../common/UtilityModal.module.scss'

import { resetModal } from '@entities/modal/actions'

import Modal from '@commonV2/Modal'
import Button from '@components/shared/Button'
import HeadIcon from '../../common/HeadIcon'

export default function RateLimit () {
	const dispatch = useDispatch()

  const closeHandler = React.useCallback(() => {
    dispatch(resetModal())
  }, [dispatch])

	return (
		<Modal
			closeHandler={closeHandler}
			size='l'
		>
			<div className={styles['wrapper']}>
				<HeadIcon type='cross' />
				<div className={styles['title']}>
          Blocked!
				</div>
				<div className={styles['text']}>
          You have made too many requests in one minute
				</div>
				<div className={styles['buttons-wrapper']}>
          <Button
            className={btnStyles['btn-login-primary']}
            size='l'
            color='blue'
            fullWidth
            onClick={closeHandler}
          >
            Back to browse
          </Button>
				</div>
			</div>
		</Modal>
	)
}
