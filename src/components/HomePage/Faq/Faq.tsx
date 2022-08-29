import AccordionMain from '@components/shared/AccordionMain';
import Container from '@components/shared/Container';
import Section from '@components/shared/Section';
import classNames from 'classnames';
import React from 'react';
import styles from './Faq.module.scss';


const Faq = ({ data }) => {
  return (
    <Section className={styles['faq']}>
      <Container className={styles['faq-container']}>
        <div className={classNames(styles.header, styles['header-faq'])}>
          <h2>Faq</h2>
        </div>
        <AccordionMain data={data} className={styles['accordion-wrapper']} />
      </Container>			
    </Section>
  );
};

export default Faq;
