import React from 'react';
import JungleHeader from './JungleHeader';
import JungleContent from './JungleContent';
import JungleFooter from './JungleFooter';

import styles from './Jungle.module.scss';
import { useRouter } from 'next/router';
import classNames from 'classnames';

const JungleTheme = () => {
  const router = useRouter();
  const noFooter =
    router.pathname !== '/signup' &&
    router.pathname !== '/signup/activate' &&
    router.pathname !== '/forgot-password' &&
    router.pathname !== '/forgot-password/check-email' &&
    router.pathname !== '/signin' &&
    router.pathname !== '/signin/2fa' &&
    router.pathname !== '/signin/step1' &&
    router.pathname !== '/forgot-password/new-password' &&
    router.pathname !== '/forgot-password/success' &&
    router.pathname !== '/email-confirmation' &&
    router.pathname !== '/email-change-confirmation-sent' &&
    router.pathname !== '/email-change-confirmation';

  const isSignInBg =
    router.pathname === '/signup' ||
    router.pathname === '/signup/activate' ||
    router.pathname === '/forgot-password' ||
    router.pathname === '/forgot-password/check-email' ||
    router.pathname === '/signin' ||
    router.pathname === '/signin/2fa' ||
    router.pathname === '/signin/step1' ||
    router.pathname === '/forgot-password/new-password' ||
    router.pathname === '/forgot-password/success' ||
    router.pathname === '/email-confirmation' ||
    router.pathname === '/email-change-confirmation-sent' ||
    router.pathname === '/email-change-confirmation';

  const isProfile = router.pathname === '/my-profile';

  return (
    <div
      className={classNames(
        styles.wrapper,

        isProfile && styles.profileBg
      )}
    >
      <JungleHeader />
      {isSignInBg && <JungleContent />}
      {noFooter && <JungleFooter />}
    </div>
  );
};

export default JungleTheme;
