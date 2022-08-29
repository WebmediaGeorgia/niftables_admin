import React, { useRef } from 'react';
import useVideoPlayer from './useVideoPlayer';
import Container from '@components/shared/Container';
import Section from '@components/shared/Section';
import styles from './Video.module.scss';

import VideoIcon from 'public/field-icons/video.svg';
import classNames from 'classnames';
import Parrot from '@components/ParrotAndButterfly/Parrot';

const Video = () => {
  const videoElement = useRef(null);
  const { togglePlay, handleOnTimeUpdate } = useVideoPlayer(videoElement);

  return (
    <Section className={styles['video-section']}>      
      <Container className={styles['video-container']}>
        <div className={classNames(styles.header, styles['header-myNfts'])}>
          <h2>My NFTs</h2>
        </div>
        <div className={styles['video-wrapper']}>
          <div className={styles['video-inner']}>
            <video
              className={styles.video}
              ref={videoElement}
              onTimeUpdate={handleOnTimeUpdate}
            >
              <source
                src='/assets/video/sample-mp4-video.webm'
                type='video/webm'
              />
              <source
                src='/assets/video/sample-mp4-video.mp4'
                type='video/mp4'
              />
            </video>
          </div>
          <div className={styles.actions}>
            <button onClick={togglePlay}>
              <VideoIcon />
            </button>
          </div>
        </div>
      </Container>
      <Parrot />
    </Section>
  );
};

export default Video;
