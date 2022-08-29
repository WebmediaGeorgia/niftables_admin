import React, { FunctionComponent, useEffect } from 'react';
import Image from 'next/image';
import ButterflyLeft from 'public/assets/img/jungle/animations/motyl_skrzydlo_lewe.png';
import ButterflyBody from 'public/assets/img/jungle/animations/motyl_srodek.png';
import ButterflyRight from 'public/assets/img/jungle/animations/motyl_skrzydlo_prawe.png';
import { gsap } from 'gsap';
import anime from 'animejs';

interface OwnProps {}

type Props = OwnProps;

const Butterfly: FunctionComponent<Props> = (props) => {
  useEffect(() => {
    const butterflyWing1 = document.querySelector('#butterfly-wing-1');
    const butterflyWing2 = document.querySelector('#butterfly-wing-2');
    const butterflyBody = document.querySelector('#butterfly-body');

    gsap.fromTo(
      '#butterfly',
      {
        right: '-20vw',
        bottom: '10vh',
      },
      {
        right: '100vw',
        bottom: '70vh',
        duration: 20,
        repeat: -1,
        ease: 'linear',
      }
    );

    anime({
      targets: butterflyWing1,
      duration: 500,
      direction: 'alternate',
      rotateY: ['170deg', '0deg'],
      rotateX: ['30deg', '0deg'],
      rotateZ: ['70deg', '-20deg'],
      loop: true,
      easing: 'linear',
    });

    anime({
      targets: butterflyWing2,
      duration: 500,
      direction: 'alternate',
      rotateY: ['0deg', '120deg'],
      rotateX: ['0deg', '30deg'],
      rotateZ: ['0deg', '30deg'],
      loop: true,
      easing: 'linear',
    });
  }, []);

  return (
    <div id='butterfly' className='absolute hidden md:flex items-center z-50'>
      <div id='butterfly-wing-1' className='relative'>
        <Image src={ButterflyLeft} alt='' />
      </div>
      <div id='butterfly-body' className='relative pt-4 z-30'>
        <Image src={ButterflyBody} alt='' />
      </div>
      <div id='butterfly-wing-2' className='relative'>
        <Image src={ButterflyRight} alt='' />
      </div>
    </div>
  );
};

export default Butterfly;
