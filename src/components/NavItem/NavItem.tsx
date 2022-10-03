import { FC } from 'react';
import { useRouter } from 'next/router';

import { useTypedSelector } from '@hooks/useNewTypedSelector';
import { INavigationItem } from '@type/general';
import NavItemWrapper from '@components/NavItemWrapper';
import styles from './NavItem.module.scss';
import Link from 'next/link';
import { needHideNavItem } from '@utils/navigation';
import classNames from "classnames";

interface INavItem {
  item: INavigationItem;
}

export const NavItem: FC<INavItem> = ({
  item: { name, linkTo, restrictId },
}) => {
  const router = useRouter();
  const navigationConfig = useTypedSelector(
    (state) => state.configuration.navigationConfig
  );

  const isActiveItem = router.pathname === linkTo ? styles.isActive : '';

  if (needHideNavItem(navigationConfig, restrictId)) return null;

  return (
    <NavItemWrapper className={classNames(styles.navListItem,isActiveItem)}>
      <Link href={linkTo}>
        <a className={styles.navLink}>{name}</a>
      </Link>
    </NavItemWrapper>
  );
};
