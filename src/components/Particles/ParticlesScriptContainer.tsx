import React, { useEffect } from 'react';
import { initParticles } from './particles';

export const ParticlesScriptContainer = () => {
  useEffect(() => {
    initParticles();
  }, []);

  return <></>;
};
