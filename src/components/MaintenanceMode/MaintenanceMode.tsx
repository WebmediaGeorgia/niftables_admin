import React from 'react';
import { useRouter } from 'next/router';

import $api from 'src/common/api';
import Container from '@components/shared/Container';
import styles from './MaintenanceMode.module.scss';
import PageHeader from '@components/shared/PageHeader';
import SocialIconsContainer from '@components/SocialIconsContainer';
import GearsSVG from "@components/MaintenanceMode/GearsSVG";
import Footer from "@components/footer";
import HeaderLogo from "@components/header/header.logo";
import Link from "next/link";

export default function MaintenanceMode() {
  const router = useRouter();

  React.useEffect(() => {
    $api
      .get('/health/maintenance')
      .then(() => router.push('/'))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <HeaderLogo />
        <Link href='/'>
          <a>Superlotl</a>
        </Link>
      </div>

      <Container className={styles.container}>
        <div className={styles.media}><GearsSVG /></div>
        <div className={styles.content}>
          <PageHeader className={styles.heading}>Under maintainance</PageHeader>
          <p className={styles.description}>
            The application is currently under maintainance, please try again
            later.
          </p>
        </div>
      </Container>
    </div>
  );
}
