import React from 'react';

const Parrot = () => {
  return (
    <div
      id='left-illustrations-2'
      className='absolute hidden md:block left-0 bottom-0 overflow-hidden z-[0] pointer-events-none'
    >
      <div className='left-illu-parrot relative w-full'>
        <video
          className='video--autoplay w-full'
          autoPlay
          loop
          muted
          disablePictureInPicture
        >
          <source
            src='/assets/img/jungle/animations/videos/Parrot_VP9.webm'
            type='video/webm'
          />
          <source
            src='/assets/img/jungle/animations/videos/Parrot_H.264.mp4'
            type='video/mp4'
          />
        </video>
      </div>
    </div>
  );
};

export default Parrot;
