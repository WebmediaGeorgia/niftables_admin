import React, { memo, useState } from 'react';
import cn from 'classnames';
import teamBackground from 'public/assets/img/home-page/team/background.png';
import { SLIDES } from '@constants/home-page';
import mainStyles from './../../styles.module.scss';
import styles from './styles.module.scss';


const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };


  const nextSlide = () => {
    if (currentSlide + 1 === SLIDES.length) return;
    setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (currentSlide === 0) return;
    setCurrentSlide((prev) => prev - 1);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;
    if (touchDown === null) {
      return;
    }
    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;
    if (diff > 5) {
      prevSlide();
    }
    if (diff < -5) {
      nextSlide();
    }
    setTouchPosition(null);
  };

  return (
    <section className={styles.team}>
      <img src={teamBackground.src} alt="" className={styles.teamBackground}/>
      <div className={styles.slider} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
        <div className={styles.sliderWrapper}>
          {SLIDES.map((item, index) => <img
            key={index}
            className={cn(styles.slide,
              {
                [styles.active]: index === currentSlide,
                [styles.center]: index === currentSlide + 1,
                [styles.left]: index === currentSlide + 2,
                [styles.none]: index === currentSlide - 1,
              }
            )} src={item.src} alt=""
          />)}
        </div>
      </div>
      <div className={styles.capsule}>
        <video autoPlay loop playsInline muted>
          <source
            src="/assets/img/home-page/team/ezgif.com-gif-maker.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className={cn(styles.teamContainer, mainStyles.container)}>
        <h2 className={styles.teamTitle}>The Team</h2>
        <div className={styles.rightBlock}>
          <div className={styles.buttonContainer}>
            <button className={cn(styles.button,
              { [styles.active]: currentSlide === 0 }
            )} onClick={prevSlide}>
              <img src="/assets/img/home-page/team/button-arrow.svg" alt=""/>
            </button>
            <button className={cn(styles.button,
              { [styles.active]: currentSlide + 1 === SLIDES.length })} onClick={nextSlide}>
              <img src="/assets/img/home-page/team/button-arrow.svg" alt=""/>
            </button>
          </div>
          <span>Superh@nd</span>
          <strong>Super co-founder</strong>
          <p>
            Praesent sapien massa, convallis a pellentesque necro, egestas
            non nisi. Proin eget tortor risus.
          </p>
          <div className={styles.social}>
            <a href="#">
              <svg
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="23" cy="23" r="23"/>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.5279 19.0857H24.0991V20.8646C24.6135 19.8415 25.9327 18.9223 27.9145 18.9223C31.7135 18.9223 32.6154 20.9588 32.6154 24.6953V31.6155H28.7693V25.5463C28.7693 23.4184 28.2548 22.2184 26.9452 22.2184C25.1289 22.2184 24.3741 23.5117 24.3741 25.5453V31.6155H20.5279V19.0857ZM13.9327 31.4521H17.7789V18.9223H13.9327V31.4521ZM18.3298 14.8367C18.33 15.1591 18.266 15.4783 18.1417 15.7757C18.0174 16.0732 17.8353 16.343 17.6058 16.5694C17.1408 17.0315 16.5114 17.2902 15.8558 17.2886C15.2014 17.2882 14.5734 17.0301 14.1077 16.5703C13.8791 16.3431 13.6975 16.0731 13.5734 15.7756C13.4494 15.4781 13.3852 15.159 13.3846 14.8367C13.3846 14.1857 13.6443 13.5627 14.1087 13.103C14.574 12.6426 15.2022 12.3845 15.8568 12.3848C16.5125 12.3848 17.1414 12.6434 17.6058 13.103C18.0693 13.5627 18.3298 14.1857 18.3298 14.8367Z"
                  fill="#235DC0"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="23" cy="23" r="23"/>
                <path
                  d="M33.6727 16.5256C32.9073 16.8648 32.0851 17.0939 31.2206 17.1975C32.1126 16.6638 32.7798 15.8239 33.098 14.8344C32.26 15.3321 31.3429 15.6825 30.3865 15.8702C29.7433 15.1835 28.8914 14.7283 27.9631 14.5754C27.0348 14.4224 26.0819 14.5803 25.2524 15.0243C24.423 15.4684 23.7633 16.1739 23.3759 17.0313C22.9885 17.8887 22.895 18.8501 23.11 19.766C21.412 19.6808 19.751 19.2394 18.2346 18.4707C16.7183 17.7019 15.3805 16.6229 14.3081 15.3037C13.9415 15.9362 13.7306 16.6695 13.7306 17.4505C13.7302 18.1536 13.9034 18.8459 14.2347 19.466C14.566 20.0862 15.0453 20.6149 15.63 21.0054C14.9519 20.9838 14.2888 20.8006 13.6958 20.4709V20.5259C13.6957 21.512 14.0368 22.4678 14.6612 23.231C15.2856 23.9943 16.1548 24.518 17.1214 24.7133C16.4924 24.8835 15.8329 24.9086 15.1927 24.7866C15.4654 25.6351 15.9966 26.3771 16.712 26.9086C17.4273 27.4402 18.291 27.7348 19.1821 27.7511C17.6694 28.9386 15.8013 29.5827 13.8782 29.5799C13.5376 29.58 13.1972 29.5601 12.8589 29.5203C14.8109 30.7754 17.0832 31.4415 19.4039 31.4389C27.2597 31.4389 31.5543 24.9324 31.5543 19.2894C31.5543 19.106 31.5497 18.9209 31.5415 18.7375C32.3768 18.1334 33.0979 17.3854 33.6709 16.5284L33.6727 16.5256Z"
                  fill="#235DC0"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Slider);
