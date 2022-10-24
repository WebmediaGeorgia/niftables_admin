import React, { useState } from 'react';
import cn from 'classnames';
import gif from 'public/assets/img/home-page/beginning/gif.png';
import { useWindowSize } from '@hooks/useWindowSize';
import styles from './styles.module.scss';


const TriangleSlider = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [rotate, setRotate] = useState(0);
  const windowSize = useWindowSize();
  const isMobile = windowSize.width && windowSize.width < 600

  const handleActiveSlide = (slideIndex: number, newRotate: number) => {
    setActiveSlide(slideIndex);
    setRotate(newRotate);
  };

  return (
    <>
      <div className={styles.beginningSlider}>
        <img
          src="/assets/img/home-page/beginning/beginning-slider-circle.svg"
          alt=""
          className={styles.circleBackground}
          style={{ transform: `rotate(${rotate}deg)` }}
        />
        <img
          className={styles.triangle}
          src="/assets/img/home-page/beginning/triangle.svg"
          alt=""
        />
        <div
          onClick={() => {
            if (activeSlide === 1) handleActiveSlide(2, isMobile ? rotate - 120 : rotate + 120);
            if (activeSlide === 3) handleActiveSlide(2, isMobile ? rotate + 120 : rotate - 120);
          }}
          className={cn(styles.circle,
            {
              [styles.active]: activeSlide === 2,
              [styles.top]: activeSlide === 1,
              [styles.left]: activeSlide === 3,
            }
          )}
        >
          02
        </div>
        <div onClick={() => {
          if (activeSlide === 3) handleActiveSlide(1, isMobile ? rotate - 120 : rotate + 120);
          if (activeSlide === 2) handleActiveSlide(1, isMobile ? rotate + 120 : rotate - 120);
        }}
             className={cn(styles.circle,
               {
                 [styles.active]: activeSlide === 1,
                 [styles.top]: activeSlide === 3,
                 [styles.left]: activeSlide === 2,
               }
             )}>
          01
        </div>
        <div onClick={() => {
          if (activeSlide === 2) handleActiveSlide(3, isMobile ? rotate - 120 : rotate + 120);
          if (activeSlide === 1) handleActiveSlide(3, isMobile ? rotate + 120 : rotate - 120);
        }}
             className={cn(styles.circle,
               {
                 [styles.active]: activeSlide === 3,
                 [styles.top]: activeSlide === 2,
                 [styles.left]: activeSlide === 1,
               })}>
          03
        </div>
        <img src={gif.src} alt="" className={styles.gif}/>
      </div>
      <div className={styles.beginningRightBlock}>
        <h2>
          The <br/>
          Beginning <br/>... <span>Learn the History</span>
        </h2>
        <strong className={cn({ [styles.active]: activeSlide === 1 })}>
          Isolated from the world, the Axolotl searched for a
          superpower to avoid imminent extinction.
        </strong>
        <strong className={cn({ [styles.active]: activeSlide === 2 })}>
          Forever young and explorative, the Elderlotl discovered the
          power of tattooing.
          <span>
                    Now the Superlotls use the ink of the waterways to express
                    individuality and build a Superherd.
                  </span>
        </strong>
        <strong className={cn({ [styles.active]: activeSlide === 3 })}>
          Every tattoo represents a core memory of the Superherd and
          holds an IRL superpower.
          <span>
                    Together we will unlock the future of the Superlotls.
                  </span>
        </strong>
      </div>
    </>
  );
};

export default TriangleSlider;
