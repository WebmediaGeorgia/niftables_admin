import React, { FC } from 'react';
import cn from 'classnames';
import mainStyles from '@containers/HomePage/styles.module.scss';
import styles from './styles.module.scss';
import mainBg from 'public/assets/img/home-page/main-background.png';
import topSmoke from 'public/assets/img/home-page/top-smoke.png';
import bottomSmoke from 'public/assets/img/home-page/bottom-smoke.png';
import rightSmoke from 'public/assets/img/home-page/right-smoke.png';
import waterBlur1 from 'public/assets/img/home-page/water-blur1.png';

type Props = {
  onExecuteScroll: () => void
}

const HomePageMain: FC<Props> = ({ onExecuteScroll }) => {
  return (
    <section className={styles.main}>
      <img
        src={mainBg.src}
        alt=""
        className={styles.mainBackground}
      />
      <img src={topSmoke.src} alt="" className={styles.topSmoke}/>
      <img src={bottomSmoke.src} alt="" className={styles.bottomSmoke}/>
      <img src={rightSmoke.src} alt="" className={styles.rightSmoke}/>
      <div className={styles.water}/>
      <img src={waterBlur1.src} alt="" className={styles.waterBlur1}/>
      <div className={cn(styles.mainContainer, mainStyles.container, styles.containerTop)}>
        <h1 className={styles.mainTitle}>
          <span>Superlotl by Inkbox —</span> <br/>
          is a collection of Axolotls swimming along the blockchain.
        </h1>
        <h2 className={styles.mainSubtitle}>
          Own the tattoos on Superlotls & Earn IRL passive income from
          physical sales <br/>
          on <a href="https://inkbox.com/" target="_blank" rel="noreferrer"><span> inkbox.com </span></a>
        </h2>
        <div className={styles.populationContainer}>
          <h2 className={styles.mainPopulation}>10,000 <span>Population</span></h2>
          <strong
          >Diving from Web2 to Web3 & taking ownership and impactful utility
            to a deeper level.</strong
          >
          <a className={styles.mainButton} onClick={onExecuteScroll}>
            <span>let&apos;s swim</span>
            <img src="/assets/img/home-page/arrow-button.svg" alt=""/>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomePageMain;
