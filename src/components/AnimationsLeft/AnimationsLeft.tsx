import React, { FunctionComponent, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

interface OwnProps {
  disabled?: boolean;
  disabledOnMobile?: boolean;
}

type Props = OwnProps;

const AnimationsLeft: FunctionComponent<Props> = ({
  disabled = false,
  disabledOnMobile,
}) => {
  useEffect(() => {
    if (disabled) return;
    gsap.registerPlugin(ScrollTrigger);

    const scrollAnimationSceneLeft = gsap.timeline({
      scrollTrigger: {
        trigger: '#scene1',
        scrub: 2,
        start: 'top 60%',
        end: 'center 60%',
      },
    });

    scrollAnimationSceneLeft.fromTo(
      ['#leaf-left-1'],
      {
        left: '-40%',
        easing: 'power2.out',
        duration: 3,
      },
      {
        left: '-5%',
      }
    );

    scrollAnimationSceneLeft.fromTo(
      ['#snake-left-container'],
      {
        left: '-60%',
        easing: 'power2.out',
        duration: 3,
      },
      {
        left: '-2%',
      },
      '-=.35'
    );

    scrollAnimationSceneLeft.fromTo(
      ['#leaf-left-2'],
      {
        left: '-50%',
        easing: 'power2.out',
        duration: 3,
      },
      {
        left: '-5%',
      },
      '-=.37'
    );

    scrollAnimationSceneLeft.fromTo(
      ['#leaf-left-3'],
      {
        left: '-50%',
        easing: 'power2.out',
        duration: 3,
      },
      {
        left: '-2%',
      },
      '-=.35'
    );

    scrollAnimationSceneLeft.fromTo(
      ['#bug-w-leaf'],
      {
        left: '-40%',
        easing: 'power2.out',
        duration: 3,
      },
      {
        left: '-12%',
      },
      '-=.35'
    );

    scrollAnimationSceneLeft.fromTo(
      ['#buy-leaf-1'],
      {
        left: '-50%',
        easing: 'power2.out',
        duration: 3,
      },
      {
        left: '-2%',
      },
      '-=.35'
    );

    gsap.fromTo(
      ['#leaf-left-1'],
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
      ['#leaf-left-2'],
      {
        rotate: '-1.5deg',
      },
      {
        rotate: '3deg',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      }
    );

    gsap.fromTo(
      ['#leaf-left-3'],
      {
        rotate: '-0.5deg',
      },
      {
        rotate: '2deg',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      }
    );

    gsap.fromTo(
      ['#bug-w-leaf'],
      {
        rotate: '-0.5deg',
      },
      {
        rotate: '2deg',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      }
    );
    gsap.fromTo(
      '#snake-left',
      {
        rotate: '15deg',
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
      ['#buy-leaf-1'],
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
  
    
  }, [disabled]);
  

  return (
    <div
      className={`left-illustrations absolute h-full pointer-events-none z-10 ${
        disabledOnMobile && 'hidden md:block'
      }`}
    >
      <div id='leaf-left-1' className='origin-bottom-left absolute'> </div>
      <div id='leaf-left-2' className='origin-bottom-left absolute'></div>
      <div id='leaf-left-3' className='origin-bottom-left absolute -left-3'></div>
      <div id='snake-left-container'>
        <div id='snake-left' className='origin-left absolute w-full'></div>
      </div>
      <div id='bug-w-leaf' className='absolute origin-top-left'>
        <div id='leaf-left-4' className='absolute'></div>
        <div id='bug' className='absolute'></div>
      </div>
    </div>
  );
};

export default AnimationsLeft;
