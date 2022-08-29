import React, { ComponentType, useEffect, useState } from 'react';
import ProfileSettings from '@components/Settings/ProfileSettings';

import styles from './Settings.module.scss';

import Button from '@components/shared/Button';
import CheckBox from '@components/shared/CheckBox';
import classNames from 'classnames';

import Nav from '@components/Nav';
import { menu, sidebarSettings } from 'configure';

import Sidebar from '@components/Sidebar';
import NavSticky from '@components/shared/NavSticky';

import TwoFactorAuthentication from '@components/Settings/TwoFactorAuthentication';
import { ChangeSourse, IUser } from 'src/common/models/user';
import useSettings from './useSettings';
import ChangePassword from './ChangePassword';
import NotificationsSettings from './NotificationsSettings';
import PoUpSettings from './PoUpSettings';
import { ChangeEmail } from './ChangeEmail';
import { useNoInitialEffect } from '@hooks/useNoInitialEffect';
import { toast } from 'react-toastify';
import { useTypedSelector } from '@hooks/useNewTypedSelector';
import {
  parseNotificationDescription,
  parseNotificationSettings,
} from '@utils/parse-utils';
import Container from '@components/shared/Container';
import { isMobile } from 'react-device-detect';

interface SettingsProps {
  user: IUser;
}

const SettingsTab: ComponentType<SettingsProps> = ({ user }) => {
  const {
    errors,
    register,
    onChangeProfile,
    toggle2FA,
    onTurnOff2FA,
    onCloseTurnOff2FA,
    reset,
  } = useSettings();

  useEffect(() => {
    reset({
      username: user.username,
      settings: user.settings,
      email: user.email,
      newEmail: '',
      profile: {
        ...user.profile,
        displayName: user.profile?.displayName || '',
        bio: user.profile?.bio || '',
        website: user.profile?.website || '',
      },
      notifications: user.notificationSettings,
      status: user.status,
      updatedAt: user.updatedAt,
      password: {
        validatePassword: false,
      },
      validateNewEmail: false,
    });
  }, [user]);

  const { source } = useTypedSelector((state) => state.user);

  useNoInitialEffect(() => {
    if (!source) {
      return;
    }
    let message: string;
    switch (source) {
      case ChangeSourse.FORM:
        message = 'Your changes are successfully saved!';
        break;
      case ChangeSourse.PASSWORD:
        message = 'Password has been changed successfully';
        break;
      case ChangeSourse.TWOFA:
        message = 'Two-factor authentication has been changed successfully';
        break;
      default:
        message = '';
        console.error('Unknown notification message type!');
    }
    if (message) {
      toast.success(message);
    }
  }, [source]);

  return (
    <Container className={styles.container}>
      <Sidebar className={styles.sidebar}>
        <NavSticky>
          <Nav
            nav={sidebarSettings}
            column
            pills
            gap='s'
            isActiveItem={sidebarSettings[0].id}
            scrollActive={!isMobile}
          />
          <div className={styles.navButton}>
            <Button color='blue' size='s' space='m-0' onClick={onChangeProfile}>
              Save all changes
            </Button>
          </div>
        </NavSticky>
      </Sidebar>
      <div className={styles.settingsWrapper}>
        <div id='profile' className={styles.settingsContainer}>
          <div className={classNames('h5', styles.heading)}>
            Profile Settings
          </div>
          <ProfileSettings errors={errors} register={register} />
        </div>
        <div id='security' className={styles.settingsContainer}>
          <div className={classNames('h5', styles.heading)}>
            Security Settings
          </div>
          <ChangePassword />
          <TwoFactorAuthentication user={user} />
          <ChangeEmail />
        </div>
        <div id='notifications' className={styles.settingsContainer}>
          <div className={classNames('h5', styles.heading)}>
            Notifications Settings
          </div>
          {user.notificationSettings &&
            [...user.notificationSettings]
              .sort((a, b) => a.id - b.id)
              .map((notification, i) => (
                <NotificationsSettings
                  key={notification.id}
                  notification={{
                    title: parseNotificationSettings(notification.type),
                    description: parseNotificationDescription(
                      notification.type
                    ),
                    options: (
                      <>
                        <CheckBox
                          defaultChecked={notification.isEmail}
                          id={`emailDrops_${i}`}
                          text='Email'
                          rounded
                          error={null}
                          {...register(`notifications.${i}.isEmail`)}
                        />
                        <CheckBox
                          defaultChecked={notification.isPlatform}
                          id={`platform_${i}`}
                          text='Platform'
                          rounded
                          error={null}
                          {...register(`notifications.${i}.isPlatform`)}
                        />
                      </>
                    ),
                  }}
                />
              ))}
        </div>
        {isMobile && <div className={styles.settingsBottom}>
          <Button color='blue' size='l' onClick={onChangeProfile}>
            Save all changes
          </Button>
        </div>}
      </div>
      <PoUpSettings
        onClose={onCloseTurnOff2FA}
        show={toggle2FA}
        onClickTurnOff2FA={onTurnOff2FA}
        register={register}
      />
    </Container>
  );
};

export default SettingsTab;
