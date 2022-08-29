import React, { FunctionComponent } from 'react';
import styles from './Particles.module.scss';

const ParticlesContainer: FunctionComponent = () => {
  return (
    <div className={styles.particles}>
      <div id='particles-container' className='h-full' />
    </div>
  );
};

export default ParticlesContainer;
