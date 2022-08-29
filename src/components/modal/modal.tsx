import React, { ComponentType, useEffect } from 'react';
import styles from './modal.module.scss';
import classNames from 'classnames';
import { useShowHideScroll } from '@hooks/useShowHideScroll';

import IconClose from '/public/field-icons/icon-close.svg';

interface ModalProps {
  onClose: () => any;
  show: boolean;
  modalData?: any;
  size?: 's' | 'm' | 'l';
  backgroundStyles?: boolean;
  className?: string;
}

const Modal: ComponentType<ModalProps> = ({
  show,
  children,
  onClose,
  modalData,
  size,
  backgroundStyles,
  className,
}) => {
  if (!show) {
    return null;
  }

  const stopProp = (e) => e.stopPropagation();
  const { showScroll, hideScroll } = useShowHideScroll();
  const onHideWrapper = () => {
    showScroll();
    onClose();
  };
  useEffect(() => {
    hideScroll();
    return () => onHideWrapper();
  }, []);

  const modalClasses: string = classNames(
    styles.modal,
    className,
    { [styles['modal-small']]: size === 's' },
    { [styles['modal-medium']]: size === 'm' },
    { [styles['modal-large']]: size === 'l' },
    { [styles['modal-close']]: onClose }
  );

  return (
    <div className={styles['modal-wrap']} onClick={onHideWrapper}>
      <div id='modal' className={modalClasses} onClick={stopProp}>
        {backgroundStyles && <div className={styles['background-wrapper']} />}
        {onClose && (
          <div
            className={classNames(styles['close-modal'], 'close-module')}
            onClick={onHideWrapper}
          >
            <IconClose
              onClick={onClose}
              role={'button'}
              width={'17.5px'}
              height={'17.5px'}
              className={styles['icon-close']}
            />
          </div>
        )}
        <div className={styles.content}>
          {React.cloneElement(children as any, {
            onClick: onClose,
          })}
        </div>
      </div>
    </div>
  );
};
export default Modal;
