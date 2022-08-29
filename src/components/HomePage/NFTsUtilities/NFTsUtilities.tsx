import CarouselTabs from '@components/CarouselTabs';
import Container from '@components/shared/Container';
import Section from '@components/shared/Section';
import classNames from 'classnames';
import styles from './NFTsUtilities.module.scss';
import NFTsHomeBackGround from './NFTsHomeBackGround';

const NFTsUtilities = ({ slides, menu }) => {
  return (
    <Section className={styles['utilities']}>
      <Container className={styles['utilities-container']}>
        <div className={classNames(styles.header, styles['header-utilities'])}>
          <h2>Nft Utility</h2>
        </div>
        <CarouselTabs
          className={styles['carousel-wrapper']}
          slides={slides}
          menu={menu}
        />
      </Container>
      <NFTsHomeBackGround />
    </Section>
  );
};

export default NFTsUtilities;
