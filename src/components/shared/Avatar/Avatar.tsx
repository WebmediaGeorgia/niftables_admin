import React, { ComponentType } from 'react';

import styles from './Avatar.module.scss';

import IconEdit from 'public/assets/img/edit.svg';
import IconNoImage from 'public/other/avatar.svg';

import { IAvatar } from '@type/general';
import classNames from 'classnames';

const NO_IMAGE_SRC = '/other/avatar.svg';
const IMAGE_IS_NOT_LOADED_SRC = '';

const IconPhoto = () => <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.99954 10.1339C9.17775 10.1339 10.1329 9.17873 10.1329 8.00052C10.1329 6.82231 9.17775 5.86719 7.99954 5.86719C6.82134 5.86719 5.86621 6.82231 5.86621 8.00052C5.86621 9.17873 6.82134 10.1339 7.99954 10.1339Z" fill="#0D4B9E"/>
  <path d="M5.99967 1.33398L4.77967 2.66732H2.66634C1.93301 2.66732 1.33301 3.26732 1.33301 4.00065V12.0007C1.33301 12.734 1.93301 13.334 2.66634 13.334H13.333C14.0663 13.334 14.6663 12.734 14.6663 12.0007V4.00065C14.6663 3.26732 14.0663 2.66732 13.333 2.66732H11.2197L9.99967 1.33398H5.99967ZM7.99967 11.334C6.15967 11.334 4.66634 9.84065 4.66634 8.00065C4.66634 6.16065 6.15967 4.66732 7.99967 4.66732C9.83967 4.66732 11.333 6.16065 11.333 8.00065C11.333 9.84065 9.83967 11.334 7.99967 11.334Z" fill="#0D4B9E"/>
</svg>


const Avatar: ComponentType<IAvatar> = ({
  edit,
  userName,
  nameImage,
  imgSrc,
  width,
  height,
  className,
  color,
  size,
  onUpdateUserPhoto,
  ...props
}: IAvatar) => {
  const getAvatarSrc = (): string => {
    switch (imgSrc) {
      case undefined:
        return IMAGE_IS_NOT_LOADED_SRC;
      case null:
        return NO_IMAGE_SRC;
      default:
        return imgSrc;
    }
  };

  const getAvatarClassName = (color?: string, size?: string): string => {
    return classNames(styles.avatarWrapper, className, {
      [styles['avatar-small']]: size === 's',

      [styles['avatar-large']]: size === 'l',
      [styles['primary']]: color === 'primary',
    });
  };

  const avatarClassName: string = getAvatarClassName(color, size);
  return (
    <div className={avatarClassName} {...props}>
      <div
        style={{ display: imgSrc === undefined ? 'none' : 'block' }}
        className={classNames(styles.avatarBox)}
      >
        {
          <img
            src={getAvatarSrc()}
            width={width}
            height={height}
            alt={userName}
          />
        }
      </div>
      <label>
        {edit && (
          <div className={styles.iconBox}>
            <IconPhoto />
            <input
              type={'file'}
              hidden={true}
              accept='image/png, image/jpeg'
              onChange={onUpdateUserPhoto && onUpdateUserPhoto}
            />
          </div>
        )}
      </label>
    </div>
  );
};

export default Avatar;
