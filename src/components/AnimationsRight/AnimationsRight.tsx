import React, { FunctionComponent, useEffect } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

interface OwnProps {
  disabled?: boolean;
  disabledOnMobile?: boolean;
  snakeOnTop?: boolean;
}

type Props = OwnProps;

const AnimationsRight: FunctionComponent<Props> = ({
  disabled,
  disabledOnMobile,
  snakeOnTop = false,
}) => {
  useEffect(() => {
    if (disabled) return;
    gsap.registerPlugin(ScrollTrigger);

    const scrollAnimationSceneRight = gsap.timeline({
      scrollTrigger: {
        trigger: '#scene1',
        scrub: 2,
        start: 'top 60%',
        end: 'center 60%',
      },
    });

    const scrollAnimationSceneRightSnake = gsap.timeline({
      scrollTrigger: {
        trigger: '#scene-last-drawn',
        scrub: 2,
        start: 'top center',
        end: 'bottom 80%',
      },
    });

    scrollAnimationSceneRight.fromTo(
      ['#leaf-right-1'],
      {
        right: '-35%',
        easing: 'power2.out',
        duration: 3,
      },
      {
        right: '-2%',
      }
    );

    scrollAnimationSceneRight.fromTo(
      ['#leaf-right-2'],
      {
        right: '-35%',
        easing: 'power2.out',
        duration: 3,
      },
      {
        right: '-2%',
      },
      '-=.37'
    );

    scrollAnimationSceneRight.fromTo(
      ['#leaf-right-3'],
      {
        right: '-50%',
        easing: 'power2.out',
        duration: 3,
      },
      {
        right: '-2%',
      },
      '-=.35'
    );

    if (!snakeOnTop) {
      scrollAnimationSceneRightSnake.fromTo(
        ['#right-snake'],
        {
          top: '40%',
          right: '-80%',
          easing: 'power2.out',
          duration: 3,
        },
        {
          top: '58%',
          right: '-18%',
        }
      );
    }

    scrollAnimationSceneRightSnake.fromTo(
      ['#leaf-right-4'],
      {
        right: '-14%',
        easing: 'power2.out',
        duration: 3,
      },
      {
        right: '0',
      },
      '0'
    );
    gsap.fromTo(
      ['#leaf-right-1', '#leaf-right-3'],
      {
        rotate: '3deg',
      },
      {
        rotate: '-2deg',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      }
    );

    gsap.fromTo(
      ['#leaf-right-2'],
      {
        rotate: '1deg',
      },
      {
        rotate: '-2deg',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      }
    );

    if (!snakeOnTop) {
      gsap.fromTo(
        '#right-snake',
        {
          rotate: '1deg',
        },
        {
          rotate: '-2deg',
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        }
      );
    }
  }, [disabled, snakeOnTop]);
  return (
    <div className='right-illustrations absolute h-full right-0 pointer-events-none '>
      <div id='leaf-right-1' className='origin-bottom-right absolute'></div>
      <div id='leaf-right-2' className='origin-bottom-right absolute'></div>
      <div id='leaf-right-3' className='origin-bottom-right absolute'></div>
      <div id='leaf-right-4' className='origin-bottom-right absolute'></div>
      {!snakeOnTop && (
        <div id='right-snake' className='origin-top-right absolute'></div>
      )}
    </div>
  );
};

export default AnimationsRight;
