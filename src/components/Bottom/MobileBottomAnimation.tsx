import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import TurtleBody from 'public/assets/img/jungle/animations/turtle_body.png';
import TurtleHead from 'public/assets/img/jungle/animations/turtle_head.png';
import Water from 'public/assets/img/jungle/animations/water.png';
import IguanaBody from 'public/assets/img/jungle/animations/iguana_cialo.png';
import IguanaHead from 'public/assets/img/jungle/animations/iguana_head.png';
import Crocodile from 'public/assets/img/jungle/animations/krokodyl.png';
import CrocodileWater from 'public/assets/img/jungle/animations/woda_krokodyl.png';

import styles from './Bottom.module.scss';

interface OwnProps {}

type Props = OwnProps;

const MobileBottomAnimation: FunctionComponent<Props> = (props) => {
  return (
    <>
      <img
        id='rock-back-left'
        className={styles['rock-back-left']}
        src='https://fanadaise.s3.eu-central-1.amazonaws.com/fanadise23/2021/09/02/20210902210033_3tlaomr8bialezdg.png'
        alt=''
      />
      <img
        id='rock-back-right'
        className={styles['rock-back-right']}
        src='https://fanadaise.s3.eu-central-1.amazonaws.com/fanadise23/2021/09/02/20210902210332_vew4aipxrhgauwi8.png'
        alt=''
      />
      <div className={styles['turtle-container']}>
        <div className={styles['turtle-wrapper']}>
          <div className={styles['turtle-body']}>
            <Image src={TurtleBody} alt='' layout='responsive' />
          </div>
          <div id='turtle-head' className={styles['turtle-head']}>
            <Image src={TurtleHead} alt='' layout='responsive' />
          </div>
        </div>
      </div>
      <div className={styles['water']}>
        <Image src={Water} alt='' layout='responsive' />
      </div>
      <div className={styles['iguana-container']}>
        <div className={styles['iguana-body']}>
          <div className='w-full'>
            <Image src={IguanaBody} alt='' layout='responsive' />
          </div>
          <div id='iguana-head' className={styles['iguana-head']}>
            <Image src={IguanaHead} alt='' />
          </div>
        </div>
      </div>
      <div id='crocodile-container' className={styles['crocodile-container']}>
        <div className={styles['crocodile-body']}>
          <div id='crocodile-image' className={styles['crocodile-image']}>
            <Image src={Crocodile} alt='' />
          </div>
          <div id='crocodile-water' className={styles['crocodile-water']}>
            <Image src={CrocodileWater} alt='' />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileBottomAnimation;
