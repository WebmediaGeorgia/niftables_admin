import { FC, useState } from 'react';
import styles from './AccordionMainItem.module.scss';
import ArrowButton from 'public/other/arrow_down.svg';

import classNames from 'classnames';

interface IAccordionItemProps {
  title: string;
  defaultOpen?: boolean;
  isFirst?: boolean;
  className?: string;
}

const AccordionMainItem: FC<IAccordionItemProps> = ({
  title,
  defaultOpen,
  children,
  isFirst,
  className,
}) => {
  const [isOpen, setOpen] = useState(defaultOpen);

  return (
    <div
      className={classNames(className, styles['item'], {
        [styles.open]: isOpen,
      })}
    >
      <div
        className={classNames(
          styles['item-header'],

          {
            [styles['item-first']]: isFirst,
          }
        )}
        onClick={() => setOpen(!isOpen)}
      >
        <div className={styles['item-title']}>{title}</div>
        <div className={styles['item-button']}>
          <ArrowButton className={styles.icon} />
        </div>
      </div>
      <div
        className={classNames(styles['item-content'], {
          [styles.collapsed]: !isOpen,
        })}
      >
        <div className={styles['item-desc']}>{children}</div>
      </div>
    </div>
  );
};

export default AccordionMainItem;
