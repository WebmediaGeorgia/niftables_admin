import React, { FunctionComponent, ReactElement, useEffect } from 'react';
import Image from 'next/image';
import FooterRocks from 'public/assets/img/jungle/animations/footer_rocks.png';
import MobileBottomAnimation from './MobileBottomAnimation';
import { gsap } from 'gsap';
import Frog from 'public/assets/img/jungle/animations/zabka.png';

import styles from './Bottom.module.scss';
import classNames from 'classnames';

interface OwnProps {
  noVideoFooter?: boolean;
  isBottom?: ReactElement;
}

type Props = OwnProps;

const Bottom: FunctionComponent<Props> = ({ noVideoFooter = false }) => {
  useEffect(() => {
    const iguanaHeadAnimTimeline = gsap.timeline({
      repeat: -1,
      yoyo: true,
    });

    iguanaHeadAnimTimeline.to('#iguana-head', {
      rotate: -2,
      duration: 2,
      ease: 'power2.inOut',
    });
    iguanaHeadAnimTimeline.to('#iguana-head', {
      rotate: 6,
      duration: 2,
      ease: 'power2.inOut',
    });

    const turtleHeadTimeline = gsap.timeline({
      repeat: -1,
      yoyo: true,
    });

    turtleHeadTimeline.to('#turtle-head', {
      rotate: -10,
      duration: 2,
      ease: 'power2.inOut',
    });
    turtleHeadTimeline.to('#turtle-head', {
      rotate: 0,
      duration: 4,
      ease: 'power2.inOut',
    });

    const crocodileAnimTimeline = gsap.timeline({
      repeat: -1,
      yoyo: true,
    });

    crocodileAnimTimeline.to('#crocodile-image', {
      y: 0,
      duration: 4,
      ease: 'power2.inOut',
    });
    crocodileAnimTimeline.to('#crocodile-image', {
      y: 10,
      duration: 4,
      ease: 'power2.inOut',
    });
  }, []);
  return (
    <div className={styles['bottom']}>
      <div className={styles['bottom-inner']}>
        {noVideoFooter ? (
          <div className='block'>
            <MobileBottomAnimation />
          </div>
        ) : (
          <>
            <div className={styles['bottom-mobileAnimation']}>
              <MobileBottomAnimation />
            </div>
            <div className={styles['bottom-desktopAnimation']}>
              <video
                className={styles['video--autoplay']}
                autoPlay
                loop
                muted
                disablePictureInPicture
              >
                <source
                  src='/assets/img/jungle/animations/videos/Stopka_all_VP9.webm'
                  type='video/webm'
                />
                <source
                  src='/assets/img/jungle/animations/videos/Stopka_all_H.264.mp4'
                  type='video/mp4'
                />
              </video>
            </div>
          </>
        )}
        <div className={styles['rocks-front-container']}>
          <div className={styles['bottom-frog']}>
            <Image src={Frog} alt='' />
          </div>
          <div className={styles['rocks-front']}>
            <Image src={FooterRocks} alt='' layout='responsive' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
