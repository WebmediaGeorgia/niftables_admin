import { FC } from 'react';
import { useRouter } from 'next/router';

import { useTypedSelector } from '@hooks/useNewTypedSelector';
import { INavigationItem } from '@type/general';
import NavItemWrapper from '@components/NavItemWrapper';
import styles from './NavItem.module.scss';
import Link from 'next/link';
import { needHideNavItem } from '@utils/navigation';
import classnames from 'classnames';

interface INavItem {
  item: INavigationItem;
  isHomePage?: boolean;
}

export const NavItem: FC<INavItem> = ({
  item: { name, linkTo, restrictId },
}, isHomePage) => {
  const router = useRouter();
  const navigationConfig = useTypedSelector(
    (state) => state.configuration.navigationConfig
  );

  const isActiveItem = router.pathname === linkTo ? styles.isActive : '';

  if (needHideNavItem(navigationConfig, restrictId)) return null;

  return (
    <NavItemWrapper className={classnames(styles.navListItem, isActiveItem)}>
      <Link href={linkTo}>
        <a className={classnames(styles.navLink, {[styles.homeNavLink]: isHomePage})}>{name}</a>
      </Link>
    </NavItemWrapper>
  );
};
