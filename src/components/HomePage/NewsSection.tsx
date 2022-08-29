import React, { useState } from 'react';
import classNames from 'classnames';
import Container from '@components/shared/Container';
import Section from '@components/shared/Section';

import styles from './HomePage.module.scss';
import HomeCarousel from '@components/Carousels/HomeCarousel';
import BlockButton from './../shared/BlockButton/BlockButton';
import Button from '@components/shared/Button';
import { useRouter } from 'next/router';

export const NewsSection = ({
  slides,
  onCardClick,
  chosenPack,
  isDetailPopupShown,
  toggleDetailPopup,
  setChosenPack,
}) => {
  const router = useRouter();
  const goToAllCollections = () => {
    router.push('/packs');
  };
  return (
    <Section>
      <Container className={styles.news}>
        <div
          className={classNames(styles.header, styles['header-packs-small'])}
        >
          <h2>Newest drops/packs</h2>
        </div>
        <div className={classNames(styles.desc, styles['desc-news'])}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </div>
        {slides && (
          <>
            <HomeCarousel slides={slides} />
            <BlockButton>
              <Button
                onClick={goToAllCollections}
                className={styles['btn-see-all']}
                color='blue'
                size='s'
              >
                See all
              </Button>
            </BlockButton>
          </>
        )}
      </Container>
    </Section>
  );
};
