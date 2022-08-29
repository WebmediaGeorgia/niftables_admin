import { useState } from 'react';

import styles from './FooterTermsLinks.module.scss';

export default function FooterTermsLinks({ handleAcceptTermsClick }) {
  return (
    <>
      <div className={styles['footer-terms']}>
        <span
          role='button'
          className={styles['terms-links']}
          onClick={() => handleAcceptTermsClick('privacy')}
        >
          Privacy Policy
        </span>
        <span
          role='button'
          className={styles['terms-links']}
          onClick={() => handleAcceptTermsClick('terms')}
        >
          Terms &amp; conditions
        </span>
      </div>
    </>
  );
}
