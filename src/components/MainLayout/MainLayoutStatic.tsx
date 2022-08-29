import React, { FC } from 'react';
import JungleTheme from '@components/Jungle';
import Header from '@components/header';
import Footer from '@components/footer';
import classNames from 'classnames';
import styles from './MainLayout.module.scss';
import { IMainLayout } from '@type/general';

export const MainLayoutStatic: FC<IMainLayout> = ({
  children,
  isHero,
  className,
}) => {
  return (
    <>
      <JungleTheme />
      <Header />

      <main className={classNames(styles.main, className)}>
        <div className={styles.contentWrapper}>
          {isHero && isHero}
          {children}
        </div>
      </main>

      <Footer className='image' />
    </>
  );
};
