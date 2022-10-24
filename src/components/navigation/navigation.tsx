/* global JSX*/

import { navigationList } from 'configure';
import { NavItem } from '@components/NavItem';

import styles from './navigation.module.scss';
import cn from 'classnames';


export default function Navigation({
                                     onClickNavigation,
                                     isHomePage
                                   }: { onClickNavigation: any, isHomePage?: boolean }): JSX.Element {
  return (
    <>
      <nav className={styles['navigation']} onClick={onClickNavigation}>
        <ul className={cn(styles.navUl, { [styles.homeNavUl]: isHomePage })}>
          {navigationList.map((item) => (
            <NavItem isHomePage key={item.id} item={item}/>
          ))}
        </ul>
      </nav>
    </>
  );
}
