// @ts-nocheck
import React from 'react'
import cn from 'classnames'

import styles from './CardSection.module.scss'

import Section from '@components/shared/Section'
import Container from '@components/shared/Container'
import CarouselScrollbar from '@components/CarouselScrollbar'
import YouHave from './you-have'

export default function CardSection ({
	className, total, description, buttonLabel, clickHandler, children
}) {
  return (
    <Section className={cn([styles.section, className])}>
      <Container className={styles.container}>
        <div className={styles['you-have-wrapper']}>
          <YouHave
						total={total}
						description={description}
						buttonLabel={buttonLabel}
						clickHandler={clickHandler}
					/>
        </div>
				<CarouselScrollbar className={styles.myProfileCarousel}>
					{children}
				</CarouselScrollbar>
      </Container>
    </Section>
  )
}
