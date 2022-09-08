import { FC, ReactNode, useRef, useState } from 'react';
import styles from './MenuBar.styles.module.scss';
import classNames from 'classnames';

import IconL from '/public/field-icons/menubar-l.svg';
import IconR from '/public/field-icons/menubar-r.svg';
import ButtonClose from '/public/assets/img/icon-close.svg';

import { useShowHideScroll } from '@hooks/useShowHideScroll';

export interface IMenuBar {
  children: ReactNode | string;
}

export const MenuBar: FC<IMenuBar> = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setOpen(!isOpen);
  };
  const handleShow = () => {
    hideScroll();
    setOpen(true);
    document.body.classList.add('isFilter');
  };

  const stopProp = (e) => e.stopPropagation();
  const { showScroll, hideScroll } = useShowHideScroll();

  const onHideWrapper = () => {
    showScroll();
    setOpen(false);
    document.body.classList.remove('isFilter');
  };

  return (
    <>
      <div className={styles.navbar} onClick={handleShow}>
        <IconR role={'button'} className={styles['icon-filter']} />
      </div>
      <div
        ref={ref}
        onClick={stopProp}
        className={classNames(styles['menubar'], {
          [styles.collapsed]: !isOpen,
        })}
      >
        <div
          className={classNames(
            styles.headerFilter,
            isOpen && styles['headerFilter-show']
          )}
        >
          <div className={styles['icon-close']} onClick={onHideWrapper}>
            <ButtonClose role={'button'} />
          </div>
          <div className={classNames(styles['icon-filter'], { [styles.openIcon]: isOpen })} onClick={handleToggle}>
            {isOpen
              ? <IconL role={'button'} />
              : <IconR role={'button'} />
            }
          </div>
          <div
            className={classNames(
              styles['menubar-header'],
              isOpen && styles['menubar-header-show']
            )}
          >
            Filters
          </div>
        </div>
        <div
          className={classNames(
            styles['menubar-wrapper'],
            isOpen && styles['menubar-wrapper-show']
          )}
        >
          {children}
        </div>
      </div>
    </>
  );
};
