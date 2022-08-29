import Container from '@components/shared/Container';
import Section from '@components/shared/Section';
import classNames from 'classnames';
import BuyCard from '../BuyCard';
import styles from './Buy.module.scss';
import Butterfly from '@components/ParrotAndButterfly/Butterfly';

const Buy = () => {
  return (
    <Section className={styles['buy-egg']}>
      <Container className={styles['buy-container']}>
        <div className={classNames(styles.header, styles['header-buy'])}>
          <h2>Buy An Egg</h2>
        </div>
        <div className={styles.desc}>
          Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
          Proin eget tortor risus. Lorem ipsum dolor sit amet,
        </div>
        <BuyCard />
        <div className={styles.butterfly}></div>
        <div id="buy-leaf-1" className={styles['buy-leaf-1']}></div>
      </Container>
      <Butterfly />     
    </Section>
  );
};

export default Buy;
