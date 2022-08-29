import React, { FunctionComponent, useEffect } from 'react';
import Image from 'next/image';
import LeafsTopLeft from 'public/assets/img/jungle/animations/liscie_lewy_rog.png';
import LeafsTopLeft2 from 'public/assets/img/jungle/animations/gora_1odlewej.png';
import LeafsTopLeft3 from 'public/assets/img/jungle/animations/gora_2odlewej.png';
import LeafsTopRight3 from 'public/assets/img/jungle/animations/gora_3odlewej.png';
import LeafsTopRight2 from 'public/assets/img/jungle/animations/gora_4odlewej.png';
import LeafsTopRight1 from 'public/assets/img/jungle/animations/liscie_prawy_gorny_rog.png';
import { gsap } from 'gsap';
import styles from './HeroTop.module.scss';
import SnakeRight from 'public/assets/img/jungle/animations/waz_prawy.png';

interface OwnProps {
  snakeOnTop?: boolean;
}

type Props = OwnProps;

const HeroTop: FunctionComponent<Props> = ({ snakeOnTop = false }) => {
  useEffect(() => {
    gsap.fromTo(
      ['#leaf-header-top-left'],
      {
        rotate: '-1.5deg',
      },
      {
        rotate: '1.5deg',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      }
    );

    gsap.fromTo(
      ['#leaf-header-top-left-2', '#leaf-header-top-left-3'],
      {
        rotate: '-3deg',
      },
      {
        rotate: '1.3deg',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      }
    );

    gsap.fromTo(
      ['#leaf-header-top-right-3', '#leaf-header-top-right-2'],
      {
        rotate: '3deg',
      },
      {
        rotate: '-1.3deg',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      }
    );

    gsap.fromTo(
      ['#leaf-header-top-right-1'],
      {
        rotate: '0deg',
      },
      {
        rotate: '-3.5deg',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      }
    );

    if (snakeOnTop) {
      gsap.fromTo(
        '#right-snake-top',
        {
          rotate: '-2deg',
          scaleX: -1,
        },
        {
          rotate: '4deg',
          scaleX: -1,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        }
      );
    }
  }, [snakeOnTop]);
  return (
    <div className={styles['bg-top']}>
      <div
        id='leaf-header-top-left'
        className='absolute -left-2 -top-2 origin-top-left'
      >
        <Image src={LeafsTopLeft} alt='' layout='responsive' quality={100} />
      </div>
      <div
        id='leaf-header-top-left-2'
        className='absolute -top-8 origin-top-left'
      >
        <Image src={LeafsTopLeft2} alt='' layout='responsive' quality={100} />
      </div>
      {snakeOnTop && (
        <div id='right-snake-top' className='absolute -top-8 origin-top-right'>
          <Image src={SnakeRight} alt='' layout='responsive' />
        </div>
      )}
      <div
        id='leaf-header-top-left-3'
        className='absolute -top-2 origin-top-left'
      >
        <Image src={LeafsTopLeft3} alt='' layout='responsive' quality={100} />
      </div>
      <div
        id='leaf-header-top-right-3'
        className='absolute -top-2 origin-top-right z-10'
      >
        <Image src={LeafsTopRight3} alt='' layout='responsive' quality={100} />
      </div>
      <div
        id='leaf-header-top-right-2'
        className='absolute -top-2 origin-top-right'
      >
        <Image src={LeafsTopRight2} alt='' layout='responsive' quality={100} />
      </div>
      <div
        id='leaf-header-top-right-1'
        className='absolute -right-2 -top-2 origin-top-right'
      >
        <Image src={LeafsTopRight1} alt='' layout='responsive' quality={100} />
      </div>
    </div>
  );
};

export default HeroTop;
