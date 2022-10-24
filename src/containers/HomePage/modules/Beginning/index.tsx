import React, { FC, Ref, useEffect, useState } from 'react';
import mainStyles from '@containers/HomePage/styles.module.scss';
import styles from './styles.module.scss';
import waterBlur from 'public/assets/img/home-page/water-blur.png';
import beginningBackground from 'public/assets/img/home-page/beginning/beginning-background.png';
import bubbles1 from 'public/assets/img/home-page/bubbles1.png';
import cn from 'classnames';
import bubbles2 from 'public/assets/img/home-page/bubbles2.png';
import bubbles3 from 'public/assets/img/home-page/bubbles3.png';
import bubbles4 from 'public/assets/img/home-page/bubbles4.png';
import TriangleSlider from '@containers/HomePage/components/TriangleSlider';
import { useWindowSize } from '@hooks/useWindowSize';


type Props = {
  beginningSectionRef: Ref<HTMLDivElement>
  beginningOpacity: number
  beginningScroll: number
}

const BUBBLES = [
  bubbles1.src,
  bubbles2.src,
  bubbles3.src,
  bubbles4.src,
];


const BeginningHomePage: FC<Props> = ({ beginningSectionRef, beginningOpacity, beginningScroll }) => {
  const [activeBubble, setActiveBubble] = useState(0);
  const windowSize = useWindowSize();

  useEffect(() => {
    const bubbleInterval = setInterval(() => {
      setActiveBubble(prev => {
        if (prev >= 3) return 0;
        return prev + 1;
      });
    }, 1500);
    return () => clearInterval(bubbleInterval);
  }, []);

  return (
    <section
      className={styles.beginning} ref={beginningSectionRef}
      style={windowSize.width && windowSize.width < 600 ? {} : { zIndex: beginningOpacity > 0 ? 9 : -1, opacity: beginningOpacity }}
    >
      <img src={waterBlur.src} alt="" className={styles.waterBlur}/>
      <div className={styles.beginningWrapper}>
        <div className={styles.beginningContainer}>
          <img
            style={{ transform: beginningScroll > 10 ? `scale(${Math.round(beginningScroll) / 10})` : `scale(1)` }}
            className={styles.beginningBackground}
            src={beginningBackground.src}
            alt=""
          />
          {BUBBLES.map((item, index) => <img
            src={item}
            key={index}
            alt=""
            className={cn(styles[`bubbles${index + 1}`], { [styles.active]: activeBubble === index })}
          />)}
          <div
            className={cn(styles.beginning__container, mainStyles.container, { [styles.remove]: beginningScroll > 14 })}
          >
            <TriangleSlider/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeginningHomePage;
