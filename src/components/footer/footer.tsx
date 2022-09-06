import { useRouter } from 'next/router';

import styles from './footer.module.scss';
import FooterColumn from './FooterColumn';
import Copyright from '../copyright';
import SocialIconsContainer from '../SocialIconsContainer';
import FooterTermsLinks from './FooterTermsLinks';
import Container from '@components/shared/Container';
import PoweredBy from '@components/PoweredBy';
import PopUpTerms from '@components/PopUpTerms';
import { FC, useState } from 'react';
import classNames from 'classnames';
import { IFooterProps } from '@type/general';

const restrictionPathnames = [
  '/maintenance-mode',
  '/email-change-confirmation-sent',
];

const Footer: FC<IFooterProps> = ({ className, isBottom }) => {
  const router = useRouter();
  const isHome = router.pathname === '/';

  if (restrictionPathnames.includes(router.pathname)) return null;
  const [showModal, setShowModal] = useState<boolean>(false);
  const [type, setType] = useState<string>('terms');

  const handleAcceptTermsClick = (type: string) => {
    setType(type);
    setShowModal(!showModal);
  };
  return (
    <>
      <footer className={classNames(styles.footer, styles[`${className}`])}>
        <Container
          className={classNames(
            styles.container,
            isHome && styles['footer-home']
          )}
        >
          <div className={styles.inner}>
            <FooterColumn alignContent='left'>
              <PoweredBy />
              <Copyright />
            </FooterColumn>
            <FooterColumn alignContent='center'>
              <SocialIconsContainer />
            </FooterColumn>

            <FooterColumn alignContent='right'>
              <FooterTermsLinks
                handleAcceptTermsClick={handleAcceptTermsClick}
              />
            </FooterColumn>
          </div>
        </Container>
      </footer>
      <PopUpTerms
        onClose={handleAcceptTermsClick}
        isShow={showModal}
        showText={type}
      />
    </>
  );
};
export default Footer;
