import React, { FC } from 'react';
import JungleTheme from '@components/Jungle';
import Header from '@components/header';
import Footer from '@components/footer';
import HeroTop from '@components/HeroTop/HeroTop';
import AnimationsLeft from '@components/AnimationsLeft/AnimationsLeft';
import AnimationsRight from '@components/AnimationsRight/AnimationsRight';

import styles from './MainLayout.module.scss';
import { IMainLayout } from '@type/general';
import ParticlesContainer from '@components/Particles/ParticlesContainer';
import { ParticlesScriptContainer } from '@components/Particles/ParticlesScriptContainer';
import Bottom from '@components/Bottom/Bottom';
import classNames from 'classnames';

export const MainLayout: FC<IMainLayout> = ({
  children,
  isHero,
  className,
}) => {
  return (
    <>
      <Header />
      <div className={styles.headingBg} />
      <main className={classNames(styles.main, className)}>
        <div className={styles.contentWrapper}>
          <div className={styles['main-animation']}>
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
